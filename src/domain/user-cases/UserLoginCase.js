const HttpResponse = require('../../main/helpers/http-reponse')
const { compareHash } = require('../../main/helpers/encrypter')
const Userdb = require('../../infra/MongoDb/Queries/UserQueries')
module.exports = {
  async UserLoginCase (httpResquest) {
    try {
      const { email, password } = httpResquest.body
      if (!email) {
        return {
          success: false,
          error: HttpResponse.badRequest('Email is required to login')
        }
      }
      if (!password) {
        return {
          success: false,
          error: HttpResponse.badRequest('Passwod is required to login')
        }
      }
      const query = await Userdb.getEmail(email)
      console.log(query.user.password)
      console.log(query.user)
      if (!query.success) {
        return {
          success: false,
          error: HttpResponse.badRequest('Email not found')
        }
      }
      const validatePassword = await compareHash(password, query.user.password)
      if (!validatePassword) {
        return {
          success: false,
          error: HttpResponse.badRequest('Incorrect password')
        }
      }

      return {
        success: true,
        user: query.user
      }
    } catch (error) {
      return {
        success: false,
        error: HttpResponse.badRequest('Incorrect password')
      }
    }
  }
}
