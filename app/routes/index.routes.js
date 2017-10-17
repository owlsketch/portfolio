module.exports = function(app) {
  app.get('/', function(req, res) {
    //recall we set views to ./app/views
    res.render('pages/index.ejs');
  });

  app.get('/about', function(req, res) {
    res.render('pages/about.ejs');
  });

  //each project summary is a subroute of this route
  //however the project itself has its own route.
  //For example, the gallery is found at /gallery
  //If a project has it's own domain name, then the
  //route for that project redirects to that domain
  app.get('/projects', function(req, res) {
    res.render('pages/projects.ejs');
  });

  app.get('/gallery', function(req, res) {
	res.render('projects/gallery.ejs');
  });
};
