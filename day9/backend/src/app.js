const express = require('express')
const notesModel = require('./models/notes.model')
const cors = require('cors')
const { ClerkExpressRequireAuth } = require('@clerk/clerk-sdk-node')

const app = express()

// Middlewares
app.use(express.json())
app.use(cors())
app.use(express.static('./public'))
app.use(ClerkExpressRequireAuth())

// APIs
app.post('/api/notes', async (req, res) => {
    const { userId } = req.auth
    const { title, description } = req.body
    const note = await notesModel.create({
        userId, title, description
    })

    res.status(201).json({
        "message": "Notes Created Succesfully",
        note
    })
})

app.get('/api/notes', async (req, res) => {
    const { userId } = req.auth
    const allNotesOfTheUser = await notesModel.find({ userId })

    res.status(200).json({
        "message": "Notes Fetched Succesfully",
        allNotesOfTheUser
    })
})

app.delete('/api/notes/:id', async (req, res) => {
    const { userId } = req.auth
    const { id } = req.params
    await notesModel.findOneAndDelete({
        _id: id, userId
    })

    res.status(200).json({
        "message": "Note Deleted Succesfully"
    })
})

app.patch('/api/notes/:id', async (req, res) => {
    const { userId } = req.auth
    const { id } = req.params
    const { title, description } = req.body

    await notesModel.findOneAndUpdate({
        _id: id, userId
    }, {
        title, description
    })

    res.status(200).json({
        "message": "Description Modified Succesfully"
    })
})

module.exports = app