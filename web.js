var fs = require('fs');
var express = require('express');
var htmlfile = "index.html";

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

    var buffer = fs.readFileSync(htmlfile).toString();
    response.send(buffer);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});


