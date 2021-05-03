const HttpResponse = require('../../main/helpers/http-reponse')
const { AddUserCase } = require('../../domain/user-cases/AddUserCase')
const UserDb = require('../../infra/MongoDb/Queries/UserQueries')
const { createHash } = require('../helpers/encrypter')
module.exports = {
  async AddUserController (httpRequest) {
    const user = httpRequest.body
    const validateUser = await AddUserCase(user)
    if (!validateUser.success) {
      return validateUser.error
    }
    const passwordHash = await createHash(httpRequest.body.password)
    httpRequest.body.password = passwordHash
    const AddedUser = await UserDb.create(user)
    if (!AddedUser.success) {
      return HttpResponse.serverError('User not creaded')
    }
    return HttpResponse.success('Users created')
  }
}
