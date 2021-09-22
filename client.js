const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: "135.23.223.133",
    port: 50542,
  });
  conn.on("connect", () => {
    console.log('Successfully connected to game server');
  });
  conn.write('Name: MAP');
  setTimeout(() => {
    conn.write('Move: up');
  }, 1000);
  setTimeout(() => {
    conn.write('Move: left');
  },2000);
  setTimeout(() => {
    conn.write('Move: down');
  },3000);
  setTimeout(() => {
    conn.write('Move: right');
  },4000);
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};
module.exports = {connect};
