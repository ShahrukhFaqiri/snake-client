let connection;
const setupInput = (conn) => {
  const stdin = process.stdin;
  stdin.on('data', handleUserInput);
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  connection = conn;
  return stdin;
};

const handleUserInput = (key) => {
  switch (key) {
    case 'w':
      connection.write("Move: up");
      break;
    case 'a':
      connection.write('Move: left');
      break;
    case 's':
      connection.write('Move: down');
      break;
    case 'd':
      connection.write('Move: right');
      break;
    case '\u0003':
      process.exit();
      break;
  }
};

module.exports = { setupInput };
