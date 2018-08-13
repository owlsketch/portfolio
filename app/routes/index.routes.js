const path = require('path')

module.exports = function (app) {
  const viewPath = app.get('viewPath')

  app.get('/', function (req, res) {
    res.redirect('projects/gallery')
  })

  app.get('/projects/:project', function (req, res) {
    // the react app looks at the URL and determines which project
    // component to load as a result. NOTE: that all routes created
    // by react-router should point to this file, where the ReactDOM
    // loads and handles the routing from there on.
    res.sendFile(path.join(viewPath, 'projects.html'))
  })

  app.get('/about', function (req, res) {
    res.sendFile(path.join(viewPath, 'about.html'))
  })
}
