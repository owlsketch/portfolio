const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

module.exports = function () {
  let app = express()

  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())

  // since only one exists (app.html) might as well just direct to client folder
  app.set('viewPath', path.join(__dirname, '../client'))

  app.use(express.static('./dist'))
  app.use(express.static('./client')) // for images not bundled into webpack

  require('../server/routes/index.routes.js')(app)

  return app
}
