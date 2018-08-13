const path = require('path')

module.exports = function (app) {
  const viewPath = app.get('viewPath')

  app.get('/', function (req, res) {
    res.redirect('projects/gallery')
  })

  // [ UPDATE TO REACT ]
  app.get('/projects/:project', function (req, res) {
    res.sendFile(path.join(viewPath, 'projects.html'))
  })

  /*
  app.get('/partial/:project', function (req, res) {
    // pass just the partial, an ajax request
    let project = req.params.project
    res.sendFile(project + '.ejs', {
      root: path.join(__dirname, '../views/partials/projects')
    })
  })

  app.get('/article/:project', function (req, res) {
    // pass just the partial, an ajax request
    let project = req.params.project
    res.sendFile(project + '.ejs', {
      root: path.join(__dirname, '../views/partials/articles')
    })
  })
  // [ END UPDATE ]
  */

  app.get('/about', function (req, res) {
    res.sendFile(path.join(viewPath, 'about.html'))
  })
}
