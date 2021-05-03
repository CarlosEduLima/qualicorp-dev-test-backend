const HttpResponse = require('../../main/helpers/http-reponse')
const { DeleteUserCase } = require('../../domain/user-cases/DeleteUserCase')
module.exports = {
  async DeleteUserController (httpRequest) {
    const user = await DeleteUserCase(httpRequest)
    if (!user.success) {
      return user.error
    }
    return HttpResponse.success(user)
  }
}
