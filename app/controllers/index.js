var User = require('../models/UserInfo')
exports.index = function (req, res) {
  res.render('index', {
    title: '老苏首页'
  })
}