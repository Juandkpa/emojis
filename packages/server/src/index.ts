import mongoose from 'mongoose';
import server  from './app';
import { feedEmojis } from './services/github'

const init = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/emojis', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('Connected to mongodb');
        feedEmojis();
    }catch(error) {
        console.log(error);
    }
};
init();

server.listen(5000, () => {
    console.log('Listeng on port 5000');
});
