import { Router } from 'express';
import { InstitutionsController } from 'domain/modules/institutions_svc/interface_adapters/web/controllers/institutions_controllers';
import uploadFile from '@fnd/web/middlewares/upload_files/upload_file';
import { xlsxValidation } from '@fnd/web/middlewares/upload_files/xlsx_validators';

const controller = new InstitutionsController();

const router = Router();

//Get one institution
router.get('/predict', controller.get);
//Get all institutions
router.post('/train', uploadFile('file'), xlsxValidation, controller.post);
//Create one
// router.post('/create-one', controller.post);


export { router };
