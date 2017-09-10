module.exports = function(app) {
  app.get('/', function(req, res) {
    //recall we set views to ./app/views
    res.render('pages/index.ejs');
  });

  app.get('/about', function(req, res) {
    res.render('pages/about.ejs');
  })

  app.get('/projects', function(req, res) {
    res.render('pages/projects.ejs');
  })
};
