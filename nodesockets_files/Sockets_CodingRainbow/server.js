

var express = require('express');

var app = express();
var server = app.listen(3000);

app.use(express.static('public'));


console.log("my server is running!");
var connections = [];

var socket = require('socket.io');

var io = socket(server);

io.sockets.on('connection', function(socket){
	connections.push(socket);
	console.log("socket : "+socket.id+" is connected, number of connected : %s",connections.length);

	socket.on('disconnect', function(data){
		console.log();
		connections.splice(connections.indexOf(socket),1);
		console.log('socket : '+socket.id+" just disconnected! , number of connected : %s",connections.length);
	});

	socket.on('mouse', mouseMsg);
	function mouseMsg(data){
		socket.broadcast.emit('mouse',data);
		//console.log(data);
	}
});
