
import express from 'express';
import { createNewSubscriber } from './../controllers/subscribersController.js';
import { createExistingSubscriber } from './../controllers/subscribersController.js';
 

const router = express.Router();


router.post('/newSubscribe', createNewSubscriber );
router.post('/existingSubscribe', createExistingSubscriber)

export default router;