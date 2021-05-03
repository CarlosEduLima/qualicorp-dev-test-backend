const { UpdateUserController } = require('../../main/controllers/UpdateUserController')
module.exports = function updateUsersRoute () {
  return {
    async  route (HttpRequest) {
      const response = await UpdateUserController(HttpRequest)
      return response
    }
  }
}
