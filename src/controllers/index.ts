import { Request, Response } from 'express';
import URL from '../models/Url';

async function getUrls(req: Request, res: Response) {
  try {
    const Urls = await URL.find();
    res.json({ status: 'success', urls: Urls });
  } catch (err) {
    res.status(400).json({ status: 'error', message: 'Something went wrong' });
  }
}

async function newUrl(req: Request, res: Response) {
  try {
    const Url = await URL.create(req.body);
    res.json({
      status: 'success',
      message: 'Url created successfully',
      shortUrl: Url.shortUrl,
    });
  } catch (err) {
    res.status(400).json({ status: 'error', message: 'Something went wrong' });
  }
}

export default { getUrls, newUrl };
