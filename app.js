/**
 * 入口文件
 */
var express = require('express')
var path = require('path')
var _ = require('underscore')
var sequelize = require('./config/server')



var port = process.env.PORT || 3000
var app = express()



app.set('views', './app/views/pages')
app.set('view engine', 'jade')
app.use(express.bodyParser())
app.use(express.cookieParser())
app.use(express.session({
  secret: 'laosu',
  store: ''
}))

// development: 开发环境
if ('development' === app.set('env')) {
  app.set('showStackError', true)
  app.use(express.logger(':method :url :status'))
  app.locals.pretty = true
  // sequelize.set('debug', true)
}

require('./config/routes')(app)
app.use(express.static(path.join(__dirname, 'public')))
app.locals.moment = require('moment')
app.listen(port)

console.log('laosu website started on port ' + port)