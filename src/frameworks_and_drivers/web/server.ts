/**Express server import */
import express, { json } from "express";
/**Morgan Middleware */
import morgan from "@fnd/external_interfaces/morgan";
/**Cors */
import cors from "cors";
/**Routers*/
import { routes as appRoutes } from "./routes/index";
/** Import openapi */
import { apiSpec, OpenApiValidator } from '../external_interfaces/open_api';
/**Import logger */
import logger from "../external_interfaces/logger";
import errorHandler from "../../frameworks_and_drivers/web/middlewares/error/error_handler";
import { swaggerUi, swaggerDocument } from "@fnd/external_interfaces/swagger_ui";

/**Init logger */
const Logger = logger(__filename);

const HTTP_PORT = process.env.PORT || 3000;
const OPENAPI_SPEC = process.env.OPENAPI_SPEC || '/spec';
const OPENAPI_DOCS = process.env.OPENAPI_DOCS || '/docs';

export class Server {
    app: express.Application;

    constructor() {
        this.app = express();
        this.config();
    }

    config() {
        //SETTINGS
        this.app.set("port", HTTP_PORT);
        //MIDDLEWARES
        /**Morgan to see logs in dev */
        this.app.use(morgan);
        /**To process json request */
        this.app.use(json());
        /**To give cors permissions */
        this.app.use(cors());
        this.app.options('*', cors);
        /**Swagger UI */
        this.app.use(OPENAPI_DOCS, swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    }

    routes() {        
        /**App routes */
        this.app.use(appRoutes);
    }

    async configOpenAPi() {
        /**Add route to dowloand OAS file */
        this.app.use(OPENAPI_SPEC, express.static(apiSpec || ""));
        /**Install Validator in Express App */
        this.app.use(OpenApiValidator);
    }

    initErrorHandler() {
        /**Error Handler */
        this.app.use(errorHandler);
    }

    async start() {
        try {
            await this.configOpenAPi();
            this.routes();
            this.initErrorHandler();
            this.app.listen(this.app.get("port"), () => {
                Logger.warn(
                    `🆗 Express Application Running on port ${this.app.get("port")}`
                );
            });
        } catch (error) {
            Logger.error(`ERROR : ${JSON.stringify(error)}`);
        }
    }
}
