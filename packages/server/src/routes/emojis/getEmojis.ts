
import { Request, Response} from 'express';
import { Emoji } from '../../models/emoji';

export default async (req: Request, res: Response) => {
    try {
        const emojis = await Emoji.find();
        res.send(emojis);
    }catch(error) {        
        res.status(500).send(error.message);
    }
};