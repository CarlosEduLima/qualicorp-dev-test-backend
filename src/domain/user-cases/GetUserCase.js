const HttpResponse = require('../../main/helpers/http-reponse')
const UserDb = require('../../infra/MongoDb/Queries/UserQueries')
module.exports = {
  async GetUserCase (httpResquest) {
    try {
      if (!httpResquest.params.id) {
        return {
          success: false,
          error: HttpResponse.badRequest('User id was not provided')
        }
      }
      const userId = httpResquest.params.id

      const query = await UserDb.getById(userId)
      if (!query.success) {
        return {
          success: false,
          error: HttpResponse.badRequest('User was not found')
        }
      }
      return {
        success: true,
        user: query.foundUser
      }
    } catch (e) {
      return {
        success: false,
        error: HttpResponse.serverError({ error: e })
      }
    }
  }
}
