import express, { Router } from 'express';
import getEmojis from './getEmojis';

const router = express.Router();

router.get('/', getEmojis);

export { router as default };