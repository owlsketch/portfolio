const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

module.exports = function () {
  let app = express()

  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())

  app.set('viewPath', path.join(__dirname, '../public/views'))

  app.use(express.static('./dist'))
  app.use(express.static('./public')) // for images not bundled into webpack

  require('../app/routes/index.routes.js')(app)

  return app
}
