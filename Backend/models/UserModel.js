const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    id: Object,
    name: String,
    pseudo: String,
    email: String,
    surname: String,
    password: String
})

var User = mongoose.model('User',userSchema);

module.exports = User;