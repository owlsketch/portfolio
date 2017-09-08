let app = require('./config/express.js')();

app.listen(3000, function() {
  console.log('Now listening on port 3000');
});
