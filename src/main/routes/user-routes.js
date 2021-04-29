const adpter = require('../config/express-router-adpter')
const addUserRouter = require('../../presentation/routers/add-user-router')
module.exports = router => {
  router.get('/test', adpter(addUserRouter()))
}
