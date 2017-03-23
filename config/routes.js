var _ = require('underscore') // 新字段替换老字段
var Index = require('../app/controllers/index')
var Index = require('../app/controllers/user')

module.exports = function (app) {



  // Index
  app.get('/', Index.index)
  app.get('user', )
}