import express from 'express';
import * as appController from './controller/appControllers.js';

const router = express.Router();

router.get('/', appController.app_index);
router.post('/', appController.app_create);
router.get('/:id', appController.app_search);
router.delete('/:id', appController.app_delete);


export default router;