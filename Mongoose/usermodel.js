const mongoose = require('mongoose');
mongoose.connect();

const userSchema = mongoose.Schema({
    name : String,
    email : String
});

module.exports = mongoose.model("user",userSchema);