require('./helper.js');
const http = require('http');
const urls = require('url');

var count = 0;

const server = http.createServer((request, response) => {
    const path = urls.parse(request.url).pathname;
    if (path === '/') {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end("Tetra matched with Peabody " + count);
        count = count + 1;
    }
});

server.listen(3001, 'localhost');
