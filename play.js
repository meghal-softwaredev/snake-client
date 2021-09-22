const net = require("net");
const { exit } = require("process");
const {connect} = require('./client');

console.log("Connecting ...");
let conn = connect();
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  });
  return stdin;
};
setupInput();
