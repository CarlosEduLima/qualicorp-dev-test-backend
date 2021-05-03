const HttpResponse = require('../../main/helpers/http-reponse')
const UserDb = require('../../infra/MongoDb/Queries/UserQueries')
module.exports = {
  async DeleteUserCase (httpResquest) {
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

      const deleted = await UserDb.delete(userId)

      if (!deleted.success) {
        return {
          success: false,
          error: HttpResponse.badRequest('User was not deleted')
        }
      }
      return {
        success: true,
        user: deleted.user
      }
    } catch (e) {
      return {
        success: false,
        error: HttpResponse.serverError({ success: false, error: e })
      }
    }
  }
}
