const { GetUserCase } = require('../../domain/user-cases/GetUserCase')
const { ForgotPasswordCase } = require('../../domain/user-cases/ForgotPasswordCase')
const HttpResponse = require('../helpers/http-reponse')
const { createHash } = require('../helpers/encrypter')
const UserDb = require('../../infra/MongoDb/Queries/UserQueries')
module.exports = {
  async ForgotPasswordController (httpRequest) {
    const user = await GetUserCase(httpRequest)
    if (!user.success) {
      return user.error
    }
    const validate = await ForgotPasswordCase(httpRequest)
    if (!validate.validated) {
      return validate.error
    }
    const passwordHash = await createHash(httpRequest.body.newPassword)
    if (!passwordHash) {
      return {
        success: false,
        error: HttpResponse.badRequest('Error in create password hash')
      }
    }
    user.password = passwordHash
    const updatedUser = await UserDb.update(user)
    if (!updatedUser.success) {
      return {
        success: false,
        error: HttpResponse.badRequest('Error update user')
      }
    }
    return HttpResponse.success('Senha alterada')
  }
}
