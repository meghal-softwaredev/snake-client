const net = require("net");

// establishes a connection with the game server
const connect = function () {
const {connect} = require('./client');
const conn = net.createConnection({
  host: "135.23.223.133",
  port: 50542,
  });
  conn.on("connect", () => {
  console.log('Hello from Meghal'); 
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();