/**
 * 入口文件
 */
var express = require('express')
var path = require('path')
var _ = require('underscore')
var config = require('./config/config')
var Sequelize = require('sequelize')


var port = process.env.PORT || 3000
var app = express()

var sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
})

app.set('views', './app/views/pages')
app.set('view engine', 'jade')
app.use(express.bodyParser())


require('./config/routes')(app)
app.use(express.static(path.join(__dirname, 'public')))