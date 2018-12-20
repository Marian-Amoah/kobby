

const express = require('express');
let app = express();
// const socket = ;

app.use(express.static(__dirname + '/public'));



let server = app.listen(3000,function(error){
  if(error == true){
    console.log("some error occured");
  }else{
    console.log("listening on localhost:3000");
  }
});


var io = require("socket.io").listen(server);

io.on("connection",function(socket){
  console.log("hello connection made :: --->");

  socket.on("stateChanged",function(state){
    console.log("this state changed :" + state);
    io.emit("updateState",state);
  });
});
