const net = require('net');

//Connecting to the server, retrievs data from the server.
const connect = () => {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });
  conn.on('data', (data) => {
    console.log('server response:', data);
  });

  conn.setEncoding('utf8');
  return conn;
};

module.exports = { connect };
