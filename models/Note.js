const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const NoteSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: Date.now
    }
});

mongoose.model('note', NoteSchema);