import axios from 'axios';
import { Emoji } from '../models/emoji';

const baseUrl = 'https://api.github.com';

const alreadyFeeded = () => {
    return Emoji.findOne();     
};

const feedEmojis = async () => {

    try {

        if (await alreadyFeeded()) {            
            return;
        }
        const boundary = 10;
        const { data } =  await axios.get(`${baseUrl}/emojis`);
        const parsedEmojis = [];

        let i = 0;
        for (let prop in data) {
            if (i === boundary) {
                break;
            }            
            const emoji = {name: prop, command: `:${prop}:`, image: data[prop]};
            parsedEmojis.push(emoji);
            i++;            
        }
        await Emoji.collection.insertMany(parsedEmojis);        

    } catch(error) {
        console.log("error", error);
    }
};


export { feedEmojis as default };