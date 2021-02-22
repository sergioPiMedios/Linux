import { Router } from 'express';

import { router as institutionsRouter } from './institutions_svc/institutions_routes';

const router = Router();

router.use('/institutions', institutionsRouter);

export { router };
