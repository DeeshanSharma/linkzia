import express from 'express';
import controllers from '../controllers';

const router = express.Router();

router.get('/', controllers.getUrls);

router.post('/', controllers.newUrl);

export default router;
