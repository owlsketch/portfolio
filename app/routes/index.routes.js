module.exports = function(app) {
  app.get('/', function(req, res) {
    //set views to ./app/views
    res.render('pages/projects.ejs');
  });

  app.get('/projects', function(req, res) {
    res.render('pages/projects.ejs');
  })

  app.get('/about', function(req, res) {
    res.render('pages/about.ejs');
  })

};
