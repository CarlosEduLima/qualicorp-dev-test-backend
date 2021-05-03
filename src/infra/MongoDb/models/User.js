const mongoose = require('mongoose')
const userSchema = require('../schemas/userSchema')

const UserModal = mongoose.model('User', userSchema)

module.exports = { UserModal }
