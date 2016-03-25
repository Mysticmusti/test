var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/public'));

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/public/index.html');
});

app.get('/blog', function(request, response) {
    response.sendFile(__dirname + '/public/blog.html');
});

app.listen(8080);