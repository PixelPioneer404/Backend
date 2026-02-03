const express = require('express')

const app = express()

// middlewares
app.use(express.json()) //this is for express to be able to read req.body

// Globals
let notes = []

//APIs for the CRUD system
// Create - Method: POST | Endpoint: '/notes'
app.post('/notes', (req, res) => {
    const newNote = req.body
    notes.push(newNote)
    res.status(201).json({
        "message": "note created succesfully"
    })
})

// Read - Method: GET | Endpoint: '/notes'
app.get('/notes', (req, res) => {
    if (notes.length !== 0) {
        res.status(200).json({
            "note": notes
        })
    } else {
        res.status(200).json({
            "message": "no notes found"
        })
    }
})

// Update(Only Desciption) - Method: PATCH | Endpoint: '/notes/:idx'
app.patch('/notes/:idx', (req, res) => {
    const { idx } = req.params
    const newDesc = req.body.desc
    if (idx > 0) notes[idx - 1].desc = newDesc

    res.status(200).json({
        "message": "note modifiyed succesfully"
    })
})

// Delete - Method: DELETE | Endpoint: '/notes/:idx'
app.delete('/notes/:idx', (req, res) => {
    const { idx } = req.params
    if (idx > 0) delete notes[idx - 1]

    //delete status code is 204 but using 200 because 204 doesn't allow to send message
    res.status(200).json({
        "message": "note deleted succesfully"
    })
})

module.exports = app