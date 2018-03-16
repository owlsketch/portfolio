module.exports = function(app) {
  app.get('/', function(req, res) {
    //pass project var into template. Within 
    //template use var to load pixel partial
    res.render('pages/projects.ejs', {
      project: 'pixel'
    });
  });

  app.get('/projects/:project', function(req, res) {
    //pass project var into template. Within 
    //template use var to load :project partial
    res.render('pages/projects.ejs', {
      project: req.params.project
    });
  })

  app.get('/about', function(req, res) {
    res.render('pages/about.ejs');
  })

};
