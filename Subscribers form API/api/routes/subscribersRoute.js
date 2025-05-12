
import express from 'express';
import { createSubscriber } from './../controllers/subscribersController.js';
 

const router = express.Router();

router.post('/subscribe', createSubscriber );

export default router;