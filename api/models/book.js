import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const bookSchema = new Schema({
    title:String,
    author:String,
    pages: Number,
    price:Number,
});

export default mongoose.model('Book',bookSchema);