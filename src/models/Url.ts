import mongoose from 'mongoose';
import { customAlphabet } from 'nanoid';

const alphabet =
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

const nanoid = customAlphabet(alphabet, 8);

interface URL {
  name?: string;
  longUrl: string;
  shortUrl?: string;
  count?: number;
}

const UrlSchema = new mongoose.Schema<URL>({
  name: {
    type: String,
  },
  longUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    default: () => nanoid(),
  },
  count: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model<URL>('Url', UrlSchema);
