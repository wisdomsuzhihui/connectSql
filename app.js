/**
 * 入口文件
 */
var express = require('express')
var path = require('path')
var _ = require('underscore')




var port = process.env.PORT || 3000
var app = express()



app.set('views', './app/views/pages')
app.set('view engine', 'jade')
app.use(express.bodyParser())


require('./config/routes')(app)
app.use(express.static(path.join(__dirname, 'public')))
app.locals.moment = require('moment')
app.listen(port)

console.log('laosu website started on port ' + port)