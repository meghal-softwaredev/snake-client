const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: "135.23.223.133",
    port: 50542,
  });
  conn.on("connect", () => {
    console.log('Successfully connected to game server');
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};
module.exports = {connect};
