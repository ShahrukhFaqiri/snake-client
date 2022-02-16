// IP: 165.227.47.243
// PORT: 50541

const net = require('net');
const connect = () => {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  conn.setEncoding('utf8');
  return conn;
};

console.log('Connecting ...');
connect();
