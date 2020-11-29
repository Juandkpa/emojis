import axios from 'axios';
import { Emoji } from '../models/emoji';
import socketIO from '../core/socketIO';

const baseUrl = 'https://api.github.com';
const boundary = 5;
let emojisInMemory = {};

const alreadyFeeded = () => {
    return Emoji.findOne();     
};

const feedEmojis = async () => {

    try {

        if (await alreadyFeeded()) {            
            return;
        }
        
        ({ data: emojisInMemory } =  await axios.get(`${baseUrl}/emojis`));
        
        const parsedEmojis = [];

        let i = 0;
        for (let prop in emojisInMemory) {
            if (i === boundary) {
                break;
            }            
            const emoji = {name: prop, command: `:${prop}:`, image: emojisInMemory[prop]};
            parsedEmojis.push(emoji);
            i++;            
        }
        await Emoji.collection.insertMany(parsedEmojis);        

    } catch(error) {
        console.log("error", error);
    }
};

const addNextEmoji = async (emojiIndex) => {   
    
    try {
        const nextEmojiIndex = boundary + emojiIndex;        

        let i = 0;
        for (let prop in emojisInMemory) {
            if(i === nextEmojiIndex) {
                const rawEmoji = {name: prop, command: `:${prop}:`, image: emojisInMemory[prop]};
                const emoji = Emoji.build(rawEmoji);
                const newEmoji = await emoji.save();
                socketIO.emitMessage('newEmoji', newEmoji);
            }
            i++;
        }

    }catch(error) {
        console.log("error", error);
    }

}

const emitFirstEmoji = async () => {
    try {
        const emoji = await alreadyFeeded();
        socketIO.emitMessage('newEmoji', emoji);
    }catch(error) {
        console.log('error', error);
    }
}

export { feedEmojis, addNextEmoji, emitFirstEmoji };