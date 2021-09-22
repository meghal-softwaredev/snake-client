const {MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY, MESSAGE} = require('./constants');
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
    if (key === MOVE_UP_KEY) {
      conn.write('Move: up');
    }
    if (key === MOVE_DOWN_KEY) {
      conn.write('Move: down');
    }
    if (key === MOVE_LEFT_KEY) {
      conn.write('Move: left');
    }
    if (key === MOVE_RIGHT_KEY) {
      conn.write('Move: right');
    }
    if (key === MESSAGE) {
      conn.write('Say: LOL!');
    }
  });
  return stdin;
};

module.exports = {setupInput};