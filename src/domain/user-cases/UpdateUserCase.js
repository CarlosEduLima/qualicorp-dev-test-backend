const HttpResponse = require('../../main/helpers/http-reponse')
const UserDb = require('../../infra/MongoDb/Queries/UserQueries')
module.exports = {
  async UpdateUserCase (user) {
    try {
      if (!user.body) {
        return {
          success: false,
          error: HttpResponse.serverError('User was not provided')
        }
      }
      if (!user.params.id) {
        return {
          success: false,
          error: HttpResponse.serverError('User id was not provided')
        }
      }
      const userId = user.params.id

      const query = await UserDb.getById(userId)

      if (!query.success) {
        return {
          success: false,
          error: HttpResponse.badRequest({ success: false, msg: 'user not found' })
        }
      }
      return {
        success: true
      }
    } catch (e) {
      return {
        success: false,
        error: HttpResponse.serverError({ success: false, msg: 'Error on validate user' })
      }
    }
  }
}
