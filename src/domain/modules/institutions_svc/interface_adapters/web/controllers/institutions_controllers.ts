import { BaseController } from '@common/interface_adapters/web/controllers/bases/base_controller';
import logger from '@fnd/external_interfaces/logger';
import institutionsSvc from 'domain/modules/institutions_svc/app_business_rules/index';
import { HTTPCodesEnum } from '@common/enterprise_business_rules/dto/enums/errors_enums';
import { ApiResponse } from '@common/enterprise_business_rules/dto/responses/api_response';

const Logger = logger(__filename);

export class InstitutionsController extends BaseController {

    async get(req: any, res: any, next: any): Promise<void> {
        try {
            const result = await institutionsSvc.predict(req.query);
            console.log(result);
            res.status(HTTPCodesEnum.SUCCESSFUL);
            res.json(new ApiResponse(HTTPCodesEnum.CREATED, result));
        } catch (error) {
            next(error);
        }

    }

    async getById(req: any, res: any, next: any): Promise<void> {
        throw new Error('Method not implemented.');
    }

    async getReport(req: any, res: any, next: any): Promise<void> {
        throw new Error('Method not implemented.');
    }

    async post(req: any, res: any, next: any): Promise<void> {
        try {
            const file = req.files[0];
            const result = await institutionsSvc.train(file);
            console.log(result);
            res.status(HTTPCodesEnum.SUCCESSFUL);
            res.json(new ApiResponse(HTTPCodesEnum.CREATED, result));
        } catch (error) {
            next(error);
        }
    }

    async patch(req: any, res: any, next: any): Promise<void> {
        throw new Error('Method not implemented.');
    }

    async put(req: any, res: any, next: any): Promise<void> {
        throw new Error('Method not implemented.');
    }

    delete(req: any, res: any, next: any): Promise<void> {
        throw new Error('Method not implemented.');
    }

}
