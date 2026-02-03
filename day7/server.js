/*
Uses for:
- Starting the server
- Connectin to database
*/

require('dotenv').config()
const app = require('./src/app.js')
const connectToDb = require('./src/configs/database.js')

connectToDb() //to connect server to the database

app.listen(3000, () => {
    console.log("server is running on port 3000")
})