var http = require('http');

var handleRequest = function(request, response) {
    console.log('Received request for URL: ' + request.url);
    response.writeHead(200);
    response.end('<html><head><title>PKS Demo</title></head><body><img src="https://hcahealthcare.com/contentAsset/raw-data/f430917e-9fa1-4f1a-8dc7-d652c0b00e71/fullColorLogo" width=50% align=center /></body></html>');
};
var www = http.createServer(handleRequest);
www.listen(8080);
