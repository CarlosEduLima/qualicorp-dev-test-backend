const HttpResponse = require('../../main/helpers/http-reponse')
const { UpdateUserCase } = require('../../domain/user-cases/UpdateUserCase')
const UserDb = require('../../infra/MongoDb/Queries/UserQueries')
module.exports = {
  async UpdateUserController (httpRequest) {
    const validateUser = await UpdateUserCase(httpRequest)
    if (!validateUser.success) {
      return validateUser.error
    }
    const updatedUser = await UserDb.update(httpRequest.params.id, httpRequest.body)
    if (!updatedUser.success) {
      return HttpResponse.serverError(updatedUser.error)
    }
    return HttpResponse.success({ success: true, user: updatedUser })
  }
}
