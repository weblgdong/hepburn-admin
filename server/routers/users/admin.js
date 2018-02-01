const router = require('koa-router')();
const admin = require('../../controllers/admin')
module.exports = router.post('/login', admin.adminLogin)
module.exports = router.get('/vToken', admin.verification)