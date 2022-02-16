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
      setInterval(() => {
        connection.write('Move: up');
      });
      break;
    case 'a':
      setInterval(() => {
        connection.write('Move: left');
      });
      break;
    case 's':
      setInterval(() => {
        connection.write('Move: down');
      });
      break;
    case 'd':
      setInterval(() => {
        connection.write('Move: right');
      });
      break;
    case 'k':
      connection.write('Say: Say Message');
      break;
    case '\u0003':
      process.exit();
      break;
  }
};

module.exports = { setupInput };
