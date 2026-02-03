/*
 This file is used for:
 - Starting the server
 - Connecting the server with database
*/

//Mongoose is a package which helps tho build the connection between server and the database
//mongoose.connect method takes cluster uri along with the database name in the uri "..the..uri..../<databse_name>" and serches the database into the cluster, if it doesn't exist then it creates one and connects to it

const app = require('./src/app.js')
const mongoose = require('mongoose')

function connectWithDB() {
    mongoose.connect("mongodb+srv://rajbeer:gh9HgNG65GwijTV0@notesappcluster.hwbuzcl.mongodb.net/day-6")
        .then(() => { console.log("Connected to database") })
}

connectWithDB()

app.listen(3000, () => {
    console.log("server is running on port 3000")
})