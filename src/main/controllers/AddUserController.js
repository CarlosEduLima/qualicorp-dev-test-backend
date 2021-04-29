const HttpResponse = require('../../presentation/helpers/http-reponse')
module.exports = {
  async AddUserController (httpRequest) {
    return HttpResponse.success('Usuário criado com sucesso')
  }
}
