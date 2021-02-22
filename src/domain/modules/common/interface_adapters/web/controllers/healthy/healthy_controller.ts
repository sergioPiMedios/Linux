
import { HTTPCodesEnum } from "@common/enterprise_business_rules/dto/enums/errors_enums";
import { ApiResponse } from "@common/enterprise_business_rules/dto/responses/api_response";
import * as info from '../../../../../../../../package.json';

const svc = process.env.APP_ID || "Service";
const env = process.env.NODE_ENV || 'development';

const healthy = { message: `${svc} OK 👽`, environment: env, version: info.version }

export class HealthyController {

    get(req: any, res: any, next: any) {
        try {
            res.status(HTTPCodesEnum.SUCCESSFUL);
            res.send(new ApiResponse(HTTPCodesEnum.SUCCESSFUL, healthy));
        } catch (error) {
            next(error);
        }
    }

    readiness(req: any, res: any, next: any): void {
        try {
            res.status(HTTPCodesEnum.SUCCESSFUL);
            res.send(new ApiResponse(HTTPCodesEnum.SUCCESSFUL, healthy));
        } catch (error) {
            next(error);
        }
    }

    health(req: any, res: any, next: any): void {
        try {
            res.status(HTTPCodesEnum.SUCCESSFUL);
            res.send(new ApiResponse(HTTPCodesEnum.SUCCESSFUL, healthy));
        } catch (error) {
            next(error);
        }
    }

}