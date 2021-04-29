const { AddUserController } = require('../../main/controllers/AddUserController')
module.exports = function addUserRoute () {
  return {
    async  route (HttpRequest) {
      const response = await AddUserController(HttpRequest)
      return response
    }
  }
}
