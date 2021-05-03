const HttpResponse = require('../../main/helpers/http-reponse')
const UserDb = require('../../infra/MongoDb/Queries/UserQueries')
module.exports = {
  async AddUserCase (user) {
    try {
      if (!user) {
        return {
          success: false,
          error: HttpResponse.serverError('User was not provided')
        }
      }
      const { email, password, cpf } = user
      if (!email) {
        return {
          success: false,
          error: HttpResponse.badRequest({ success: false, msg: 'email is required to create user' })
        }
      }
      if (!password) {
        return {
          success: false,
          error: HttpResponse.badRequest({ success: false, msg: 'password is required to create user' })
        }
      }
      if (!cpf) {
        return {
          success: false,
          error: HttpResponse.badRequest({ success: false, msg: 'cpf is required to create user' })
        }
      }
      const userEmail = await UserDb.getEmail(email)
      if (userEmail.success) {
        return {
          success: false,
          error: HttpResponse.badRequest({ success: false, msg: 'Email is already in use' })
        }
      }

      const userCpf = await UserDb.getCpf(cpf)
      if (userCpf.success) {
        return {
          success: false,
          error: HttpResponse.badRequest({ success: false, msg: 'Cpf is already in use' })
        }
      }
      return {
        success: true
      }
    } catch (e) {
      return {
        success: false,
        error: HttpResponse.serverError({ success: false, error: e })
      }
    }
  }
}
