import { model, Schema } from "mongoose";
import { IBook } from "./book.interface";

const bookSchema = new Schema<IBook>({
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true
    },
    author: {
        type: String,
        required: [true, 'Author is required']
    },
    genre: {
        type: String,
        enum: {
            values: ['FICTION', 'NON_FICTION', 'SCIENCE', 'HISTORY', 'BIOGRAPHY', 'FANTASY'],
            message: 'Genre is not valid: got {VALUE}'
        },
        required: [true, 'Genre is required']
    },
    isbn: {
        type: String,
        required: [true, 'ISBN is required'],
        unique: true
    },
    description: {
        type: String
    },
    copies: {
        type: Number,
        required: [true, 'Copies is required'],
        min: [0, 'Copies cannot be negative']
    },
    available: {
        type: Boolean,
        default: true
    }
},{
    versionKey : false,
    timestamps : true
});

const Book = model<IBook>("Book", bookSchema); 
export default Book;
