const path = require('path');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

io.on("connection", (socket) => {
  

  setInterval(() => socket.emit("hello", "server li diu hello al client"), 5000);

  socket.on("howareyou", (arg) => {
  console.log(arg);
});
  
});

server.listen(3000, () => {
  console.log('listening on port:3000');
});