const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const queryMessage  = new Schema({
    name: String,
    email: String,
    message: String,
});


//collection
module.exports = mongoose.model("raisedQuery",  queryMessage);