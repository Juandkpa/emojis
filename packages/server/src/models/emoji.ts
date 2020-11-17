import mongoose from 'mongoose';

interface EmojiAttrs {
    name: string;
    image: string;
    command: string;
}

interface EmojiModel extends mongoose.Model<EmojiDoc> {
    build(attrs: EmojiAttrs): EmojiDoc;
}

interface EmojiDoc extends mongoose.Document {
    name: string;
    image: string;
    command: string;
}

const emojiSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    command: {
        type: String,
        required: true
    }
});

emojiSchema.statics.build = (attrs: EmojiAttrs) => {
    return new Emoji(attrs)
}

const Emoji = mongoose.model<EmojiDoc, EmojiModel>('Emoji', emojiSchema);

export { Emoji };
