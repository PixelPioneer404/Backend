/*
Uses for:
- Server creation
- Server configuration
- APIs creation
*/

const express = require('express')
const notesModels = require('./models/notes.model')

const app = express()

app.use(express.json())

app.post('/notes', async (req, res) => {
    const { title, description } = req.body

    const note = await notesModels.create({
        title, description
    })

    res.status(201).json({
        "message": "Note Created Succesfully",
        note
    })
})

app.get('/notes', async (req, res) => {
    const notes = await notesModels.find()

    res.status(200).json({
        "message": "Notes Fetched Succesfully",
        notes
    })
})

module.exports = app