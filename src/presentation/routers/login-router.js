const { LoginController } = require('../../main/controllers/LoginController')
module.exports = function userLoginRoute () {
  return {
    async  route (HttpRequest) {
      const response = await LoginController(HttpRequest)
      return response
    }
  }
}
