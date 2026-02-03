// Used for server creation, APIs and server configuration
const express = require('express')

const app = express()

app.use(express.json())

let notes = []

app.post('/notes', (req, res) => {
    notes.push(req.body)

    res.send('note created')
})

app.delete('/notes/:index', (req, res) => {
    delete notes[req.params.index]

    res.send('note deleted')
})

app.patch('/notes/:index', (req, res) => {
    notes[req.params.index].desc = req.body.description

    res.send('Note Modifiyed')
})

app.get('/notes', (req, res) => {
    if (notes.length !== 0) res.send(notes)
    else res.send('No Notes Yet')
})

module.exports = app