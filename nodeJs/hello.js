
https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager
sudo -i <enters su mode>
sudo curl -sL https://rpm.nodesource.com/setup | bash -
sudo yum install -y nodejs
sudo yum install gcc-c++ make
exit <gets out of su mode>


var http = require('http');
http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/plain'});
res.end('Hello World Nodejs run on Amazon EC2 - (Rigo) ');
}).listen(8080);
console.log('Server running on Amazon EC2 - (Rigo) ');
