const HttpResponse = require('../../main/helpers/http-reponse')
const UserDb = require('../../infra/MongoDb/Queries/UserQueries')
module.exports = {
  async GetUsersController () {
    const query = await UserDb.getAll()
    if (!query.success) {
      return query.error
    }
    return HttpResponse.success(query.foundUsers)
  }
}
