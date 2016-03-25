var express = require('express');

var app = express();

app.use('/', express.static(__dirname + '/public'));

app.use('/', express.static(__dirname + '/public/images'));

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/public/index.html');
});

app.get('/artiesten', function(request, response) {
    response.sendFile(__dirname + '/public/artiesten.html');
});

app.get('/muziek', function(request, response) {
    response.sendFile(__dirname + '/public/muziek.html');
});

app.listen(8080);