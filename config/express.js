let express = require('express');
let bodyParser = require('body-parser');

module.exports = function() {
    let app = express();

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());

    app.set('views', './app/views');
    app.set('view engine', 'ejs');
    //should remove dependency on public to solely dist
    app.use(express.static('./public'));
    app.use(express.static('./dist'));

    require('../app/routes/index.routes.js')(app);

    return app;
};
