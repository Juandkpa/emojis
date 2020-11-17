import mongoose from 'mongoose';
import app  from './app';
import feedEmojis from './services/github'

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

app.listen(5000, () => {
    console.log('Listeng on port 5000');
});

init();