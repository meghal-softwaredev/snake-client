let connection;
const setupInput = function (conn) {
  connection = conn;
  console.log(' w = "Move: up" \n a = "Move: left" \n s = "Move: down" \n d = "Move: right"');
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", (key) => {
    if (key === '\u0003') {
      process.exit();
    }
    if (key === 'w') {
      conn.write('Move: up');
    }
    if (key === 's') {
      conn.write('Move: down');
    }
    if (key === 'a') {
      conn.write('Move: left');
    }
    if (key === 'd') {
      conn.write('Move: right');
    }
  });
  return stdin;
};

module.exports = {setupInput};