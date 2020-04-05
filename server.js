const express = require('express');
const socket = require('socket.io');

const app = express();
const port = process.env.PORT || 3000;
const server = app.listen(port);
app.use(express.static('public'));
console.log();

const io = socket(server);


io.sockets.on('connection', (socket) => {
   console.log(`We have a client! ${socket.id}`);
   socket.on('mouse',(data) =>{
     socket.broadcast.emit('mouse',data);
     console.log(data);
   });
});
