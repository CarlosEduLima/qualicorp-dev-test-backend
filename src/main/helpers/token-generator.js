const jwt = require('jsonwebtoken')
module.exports = {
  async  generate (secret, id, expires) {
    return jwt.sign({ _id: id }, secret, { expiresIn: expires })
  }
}
