const HttpResponse = require('../../main/helpers/http-reponse')
const { GetUserCase } = require('../../domain/user-cases/GetUserCase')
module.exports = {
  async GetUserController (httpRequest) {
    const query = await GetUserCase(httpRequest)

    if (!query.success) {
      return query.error
    }
    return HttpResponse.success(query.user)
  }
}
