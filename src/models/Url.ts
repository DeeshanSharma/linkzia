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
  createdAt?: Date;
}

const UrlSchema = new mongoose.Schema<URL>({
  name: {
    type: String,
    default: '',
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
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

UrlSchema.index(
  { createdAt: 1 },
  { expireAfterSeconds: 604800, partialFilterExpression: { name: '' } }
);

export default mongoose.model<URL>('Url', UrlSchema);
