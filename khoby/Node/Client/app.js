var socket = require('socket.io-client')('http://localhost:3000');
var gpio = require('rpi-gpio');

// process.on("SIGINT",function(){
//   gpio.write(12,true,function(){
//     gpio.destroy(function(){
//       process.exit();
//     });
//   });
// });
//
//
// gpio.setup(12,gpio.DIR_OUT,function(){
//   gpio.write(12,true);
// });


socket.on("connect",function(){
  console.log("Connected to the server ");
  socket.on("updateState",function(state){
    console.log("The new state is : " + state);
  });
});
