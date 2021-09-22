const net = require("net");
const {connect} = require('./client');
console.log(connect);

console.log("Connecting ...");
let conn = connect();
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
