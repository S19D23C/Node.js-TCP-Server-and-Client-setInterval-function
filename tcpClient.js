var net = require('net');

var HOST = '192.168.1.17';
var PORT = 8087;

var client = new net.Socket();

client.connect(PORT, HOST, function() {
console.log('Client connected to: ' + HOST + ':' + PORT);

//write a message to the socket as soon as the client is connected the server'

setInterval(function() {
var connection = net.connect(PORT, HOST, function(){
console.log("I am sending temperature to the server");
setInterval(function () {
var date = (new Date).toString();
connection.write("Degrees: 83.3854F Humidity: 48.9126%RH" + date);
}, 3000);
});
}, 3000);

});
client.on('data', function(data) {
if (data.toString().endsWith('exit')) {
client.destroy();

}
});

//Add a 'close' event handler for the client socket'
client.on('close', function (){
console.log('Client closed');

});
client.on('error', function(err) {
console.error(err);

});
