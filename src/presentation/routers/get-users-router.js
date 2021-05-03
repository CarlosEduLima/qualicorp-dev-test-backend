const { GetUsersController } = require('../../main/controllers/GetUsersController')
module.exports = function getUsersRoute () {
  return {
    async  route (HttpRequest) {
      const response = await GetUsersController(HttpRequest)
      return response
    }
  }
}
