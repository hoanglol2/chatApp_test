// var express = require('express');
// var app = express();
// var server = require('http').Server(app);
// var io = require('socket.io')(server);
// server.listen(3000, () => {
//   console.log('connect...');
// });
// io.on('connection', (socket) => {
//   // bien quan ly nguoi ket noi len server (socket)
//   console.log('Có người vừa kết nối' + socket.id);
//   socket.on('getUsers', (data) => {
//     // Những gì client gửi lên.
//     // console.log('server vua nhan duoc: ' + data);
//     io.sockets.emit('server-send-data', data);
//   });
// });

const http = require('http');
var express = require('express');
var app = express();
const server = http.createServer(app);
const socketio = require('socket.io');
// init our socket
const io = socketio(server).sockets;
// midddleware
require('./middleware/socket')(io);
const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Server started on port ${port}`));
