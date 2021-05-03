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

      const query = UserDb.delete(userId)

      if (!query.success) {
        return {
          success: false,
          error: HttpResponse.badRequest('User was not found')
        }
      }
      return {
        success: true,
        user: query.user
      }
    } catch (e) {
      console.log(e)
    }
  }
}
