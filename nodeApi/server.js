var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
server.listen(3000, () => {
  console.log('connect...');
});
io.on('connection', (socket) => {
  // bien quan ly nguoi ket noi len server (socket)
  console.log('Có người vừa kết nối' + socket.id);
});
