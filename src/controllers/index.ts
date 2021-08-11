import { Request, Response } from 'express';
import URL from '../models/Url';

async function getUrls(req: Request, res: Response) {
  try {
    const Urls = await URL.find();
    res.json({ status: 'success', Urls });
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

async function updateUrl(req: Request, res: Response) {
  try {
    await URL.findByIdAndUpdate(req.params.id, req.body);
    res.json({ status: 'success', message: 'Url updated successfully' });
  } catch (err) {
    res.status(400).json({ status: 'error', message: 'Something went wrong' });
  }
}

async function deleteUrl(req: Request, res: Response) {
  try {
    await URL.findByIdAndDelete(req.params.id);
    res.json({ status: 'success', message: 'Url deleted successfully' });
  } catch (err) {
    res.status(400).json({ status: 'error', message: 'Something went wrong' });
  }
}

async function urlRedirect(req: Request, res: Response) {
  try {
    const Url = await URL.findOne({ shortUrl: req.params.shortUrl });
    Url.count += 1;
    await Url.save();
    res.redirect(Url.longUrl);
  } catch (err) {
    res.status(400).json({ status: 'error', message: 'Something went wrong' });
  }
}

export default { getUrls, newUrl, updateUrl, deleteUrl, urlRedirect };
