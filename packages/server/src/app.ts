import http from 'http';
import express from 'express';
import cors from 'cors';
import { json } from 'body-parser';
import emojisRouter from './routes/emojis';
import socketIO from './core/socketIO';
import { addNextEmoji, emitFirstEmoji } from './services/github';

const app = express();
app.use(json());

app.use(cors());
app.use('/api/emojis', emojisRouter);

const server = http.createServer(app);
socketIO.init(server);

let emojiIndex = 0;
let interval = setInterval(async() => {
    await addNextEmoji(emojiIndex);    
    emojiIndex++;   
}, 6000);

export { server as default };
