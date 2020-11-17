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

        const { data } =  await axios.get(`${baseUrl}/emojis`);
        const parsedEmojis = [];

        for (let prop in data) {
            const emoji = {name: prop, command: `:${prop}:`, image: data[prop]};
            parsedEmojis.push(emoji);
        }
        await Emoji.collection.insertMany(parsedEmojis);        

    } catch(error) {
        console.log("error", error);
    }
};


export { feedEmojis as default };