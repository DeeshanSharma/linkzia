import express from 'express';
import controllers from '../controllers';

const router = express.Router();

router.get('/', controllers.getUrls);

router.post('/', controllers.newUrl);

router.put('/:id', controllers.updateUrl);

router.delete('/:id', controllers.deleteUrl);

router.get('/:shortUrl', controllers.urlRedirect);

export default router;
