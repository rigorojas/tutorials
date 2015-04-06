var http = require('http');
var fs = require('fs');
var index = fs.readFileSync(__dirname + '/index.html');
var app = http.createServer(function(req, res) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(index);
	});
var io = require('socket.io').listen(app);

io.sockets.on('connection', function(socket) {
		socket.emit('welcome', { message: 'Welcome!' });
		socket.emit('alertTrigger', { message: 'Alert' });
		socket.on('fromClient', function(socket) {
				console.log('myconnect was received by the server');
				this.emit('fromServer', { message: '++++++You are client yes you are++++' });
			});//end socket.fromClient
	});//end socket.connection

function sendAlert() {
		io.sockets.emit('alertTrigger', { message: 'rigo' });
	}//end sendTime

setInterval(sendAlert, 10000);

app.listen(3000);
