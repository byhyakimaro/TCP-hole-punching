const PUBLIC_IP_OF_CLIENT_A = '127.0.0.1'
const PUBLIC_PORT_OF_CLIENT_A = '61711'

// clientB.js
// read the server's output to find the public endpoint of A:
var c = require('net').createConnection({host : PUBLIC_IP_OF_CLIENT_A, port : PUBLIC_PORT_OF_CLIENT_A},function () {
  console.log('> (clientB) connected to clientA!');

  c.on('data', function (data) {
      console.log(data.toString());
  });
});
