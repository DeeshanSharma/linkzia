import express from 'express';

const app = express();

app.use(express.json());

const PORT: number = parseInt(process.env.PORT as string, 10) || 5000;

app.get('/', (req, res) => res.send('Server is up and running'));
app.listen(PORT, () =>
  console.log(`⚡️[SERVER]: Server is running at http://localhost:${PORT}`)
);
