var sequelize = require('../../config/server')
var User = sequelize.import('../models/UserInfo')

exports.userlist = function (req, res) {

  // User.findAll({}).on('success', function (users) {
  //   console.log(users)
  // })
  User.findAll({
    where: {
      Phone: '18219523738'
    }
  }).then(function (users) {
    console.log(users)
    res.render('userlist', {
      title: '用户列表',
      users: users
    })
  })
}