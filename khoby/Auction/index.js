const http = require("http");
// import User from './lib.js';


http.createServer((req,res)=>{
  res.end("Hello world");
}).listen(80020;)

console.log("Server started ::: ");
