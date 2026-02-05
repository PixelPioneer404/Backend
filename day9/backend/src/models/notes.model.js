const mongoose = require('mongoose')

const notesSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        index: true,
    },
    title: String,
    description: String
})

const notesModel = mongoose.model('Notes', notesSchema)

module.exports = notesModel