const mongoose = require('mongoose')

module.exports = new mongoose.Schema(
  {
    name: {
      type: String
    },
    email: {
      type: String
    },
    password: {
      type: String
    },
    cpf: {
      type: String
    },
    age: {
      type: String
    },
    phoneNumber: {
      type: String
    }

  })
