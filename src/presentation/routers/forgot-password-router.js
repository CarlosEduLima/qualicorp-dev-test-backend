const { ForgotPasswordController } = require('../../main/controllers/ForgotPasswordController')
module.exports = function resetPasswordRoute () {
  return {
    async  route (HttpRequest) {
      const response = await ForgotPasswordController(HttpRequest)
      return response
    }
  }
}
