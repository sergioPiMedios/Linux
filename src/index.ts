/**To take a enviroment variables */
require('dotenv').config();
import logger from "@fnd/external_interfaces/logger";

const Logger = logger(__filename);

const main = async () => {
    try {
        await startWebApp();
    } catch (err) {
        Logger.error(`ERROR : ${JSON.stringify(err)}`)
    }
}

const startWebApp = async () => {
    try {
        /**Express server */
        const { Server } = await import('@fnd/web/server');
        const server = new Server()
        await server.start();
    } catch (err) {
        console.log(err);
        throw err;
    }
}

main();


