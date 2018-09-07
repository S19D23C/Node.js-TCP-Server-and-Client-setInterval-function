var net = require('net');
// Configuration parameters
var HOST = '192.168.1.17';
var PORT = 8087;

// Create Server instance
var server = net.createServer(onClientConnected);

server.listen(PORT, HOST, function() {
console.log('server listening on 8087', server.address());
});

function onClientConnected(sock) {
var remoteAddress = sock.remoteAddress + ':' + sock.remotePort;
console.log('new client connected: 8087', remoteAddress);

sock.on('data', function(data) {
console.log('%s Says: %s', remoteAddress, data);
sock.write(data);
sock.write('exit');
});
sock.on('close', function () {
console.log('connection from %s closed', remoteAddress);
});
sock.on('error', function(err) {
console.log('connection from % closed', remoteAddress, err.message);
});
};
