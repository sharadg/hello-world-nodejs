var http = require('http');

var handleRequest = function(request, response) {
    console.log('Received request for URL: ' + request.url);
    response.writeHead(200);
    response.end('\
<html><head><title>PKS Demo for HCA</title></head><body> \
<div align="center"><h1>Come join us, we are hiring!</h1><br/><br/> \
<a href="https://careers.hcahealthcare.com"> \
<img src="https://hcahealthcare.com/contentAsset/raw-data/f430917e-9fa1-4f1a-8dc7-d652c0b00e71/fullColorLogo" align="middle" /> \
</a> \
</div> \
</body></html>');
};
var www = http.createServer(handleRequest);
www.listen(8080);
