let path = require('path')

module.exports = function (app) {
  app.get('/', function (req, res) {
    res.redirect('projects/pixel')
  })

  app.get('/projects/:project', function (req, res) {
    // pass project var into template. Within
    // template use var to load :project partial
    res.render('pages/projects.ejs', {
      project: req.params.project
    })
  })

  app.get('/partial/:project', function (req, res) {
    // pass just the partial, an ajax request
    let project = req.params.project
    res.sendFile(project + '.ejs', {
      root: path.join(__dirname, '../views/partials/projects')
    })
  })

  app.get('/about', function (req, res) {
    res.render('pages/about.ejs')
  })
}
