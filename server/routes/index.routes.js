const path = require('path')

module.exports = function (app) {
  const viewPath = app.get('viewPath')

  app.get('/', function (req, res) {
    res.redirect('projects/gallery')
  })

  app.get('/projects/:project', function (req, res) {
    res.sendFile(path.join(viewPath, 'app.html'))
  })

  app.get('/about', function (req, res) {
    res.sendFile(path.join(viewPath, 'app.html'))
  })
}
