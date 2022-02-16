const net = require('net');

//Connecting to the server, retrievs data from the server.
const connect = () => {

  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write("Name: TST");
    // setInterval(()=>{
    //   conn.write("Move: up");
    // }, 50)
  });
  conn.on('data', (data) => {
    console.log('Server response:', data);
  });
  conn.setEncoding('utf8');
  
  return conn;
};

module.exports = { connect };
