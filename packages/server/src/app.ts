import express from 'express';
import cors from 'cors';
import { json } from 'body-parser';
import emojisRouter from './routes/emojis';

const app = express();
app.use(json());

app.use(cors());
app.use('/api/emojis', emojisRouter);

export { app as default };