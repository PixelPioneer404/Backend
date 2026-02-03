const express = require('express')
const notesModel = require('./modules/notes.model')
const cors = require('cors')
const path = require('path')

const app = express()

// Middlewares
app.use(express.json())
app.use(cors())
app.use(express.static('./public'))

// APIs
app.post('/api/notes', async (req, res) => {
    const { title, description } = req.body
    const note = await notesModel.create({
        title, description
    })

    res.status(201).json({
        "message": "Notes Created Succesfully",
        note
    })
})

app.get('/api/notes', async (req, res) => {
    const allNotes = await notesModel.find()

    res.status(200).json({
        "message": "Notes Fetched Succesfully",
        allNotes
    })
})

app.delete('/api/notes/:id', async (req, res) => {
    const { id } = req.params
    await notesModel.findByIdAndDelete(id)

    res.status(200).json({
        "message": "Note Deleted Succesfully"
    })
})

app.patch('/api/notes/:id', async (req, res) => {
    const { id } = req.params
    const { title, description } = req.body

    await notesModel.findByIdAndUpdate(id, {
        title, description
    })

    res.status(200).json({
        "message": "Description Modified Succesfully"
    })
})

// app.use('*name', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/index.html'))
// })


module.exports = app