const mongoose = require('mongoose')

const UserScema = mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    avatar: String
}, {
    versionKey: false
})

const UserModel = mongoose.model('users', UserScema)

module.exports = {
    UserModel
}
