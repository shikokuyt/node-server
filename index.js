var express = require('express');
var app = express();

var router = express.Router();

router.get('/:user', function (req, res) {
    res.send('Hello ' + req.params.user)
});

router.get('/', function (req, res) {
    res.send('Hello World')
});

app.use('/', router);
var port = require('./config/prod').port;

app.listen(port);
