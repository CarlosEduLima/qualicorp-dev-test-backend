const HttpResponse = require('../../main/helpers/http-reponse')
const UserDb = require('../../infra/MongoDb/Queries/UserQueries')
module.exports = {
  async ForgotPasswordCase (httpRequest) {
    try {
      const { email, newPassword } = httpRequest.body
      if (!email) {
        return {
          success: false,
          error: HttpResponse.badRequest({ success: false, msg: 'email is required' })
        }
      }
      if (!newPassword) {
        return {
          success: false,
          error: HttpResponse.badRequest({ success: false, msg: 'password is required' })
        }
      }
      const query = await UserDb.getEmail(email)
      if (!query.success) {
        return {
          success: false,
          error: HttpResponse.badRequest({ success: false, msg: 'Email not found' })
        }
      }
      return { success: true }
    } catch (e) {
      return {
        success: false,
        error: HttpResponse.serverError('Error')
      }
    }
  }
}
