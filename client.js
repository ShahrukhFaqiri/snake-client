const net = require('net');
const { IP, PORT } = require('./constants');

//Connecting to the server, retrievs data from the server.
const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: SHA');
  });
  conn.on('data', (data) => {
    console.log('Server response:', data);
  });
  conn.setEncoding('utf8');

  return conn;
};

module.exports = { connect };
