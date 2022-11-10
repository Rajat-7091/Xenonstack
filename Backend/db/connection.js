const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })
// mongo db setup
const connection_url = process.env.DATABASE;

mongoose.connect(connection_url,{
    useNewUrlParser: true
})

const db = mongoose.connection;

module.exports = db;