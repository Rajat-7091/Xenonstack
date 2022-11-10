const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const queryMessage  = new Schema({
    name: String,
    email: String,
    password: String,
});

//collection
module.exports = mongoose.model("Registeration",  queryMessage);