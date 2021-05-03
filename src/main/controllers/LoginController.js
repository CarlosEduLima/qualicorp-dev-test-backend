const { UserLoginCase } = require('../../domain/user-cases/UserLoginCase')
const HttpResponse = require('../helpers/http-reponse')
require('dotenv').config()
const TokenGenerator = require('../helpers/token-generator')
module.exports = {
  async LoginController (httpRequest) {
    const validation = await UserLoginCase(httpRequest)
    if (!validation.success) {
      return validation.error
    }

    const token = await TokenGenerator.generate(process.env.SECRET, validation.user, 60 * 60 * 24)

    return HttpResponse.success({ token: token, user: validation.user })
  }
}
