/**
 * 整合路由
 */

const router = require('koa-router')();
const systemUser = require('./users/admin');

router.use('/admin', systemUser.routes(), systemUser.allowedMethods());

module.exports = router;