import { Schema, model, models } from 'mongoose';

const NoteSchema = new Schema( {
    title: {
        type: String,
        required: [ true, 'Title is required' ],
        maxlength: [ 20, 'Title cannot exceed 20 words' ],
        minlength: [ 5, 'Title must be of 5 words at least' ],
        trim: true,
        unique: true
    },
    description: {
        type: String,
        required: [ true, 'Description is required' ],
        maxlength: [ 500, 'Description cannot exceed 500 words' ],
        minlength: [ 10, 'Description must be of 20 words at least' ],
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
} );

export default models?.Note || model( 'Note', NoteSchema );