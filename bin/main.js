var Http = require('http');

var MyServer = (function () {
    function MyServer() {
        this.header = { 'Content-Type': 'text/plain' };
        var server = Http.createServer(this.onRequest);
        server.listen(3000);
        console.log("Server starting..");
    }
    MyServer.prototype.onRequest = function (request, response) {
        response.writeHead(200, this.header);
        response.end("Hello TypeScript & node.js");
    };
    return MyServer;
})();

var myServer = new MyServer();

