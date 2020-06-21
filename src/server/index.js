const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const axios = require("axios");

const port = process.env.PORT || 4001;

const app = express();
const server = http.createServer(app);

const io = socketIo(server); // < Interesting!

const getApiAndEmit = async socket => {
  socket.emit("NewChatMSG", "Want to bank tonight?"); // Emitting a new message. It will be consumed by the client
};

let interval;

io.on("connection", socket => {
  // console.log("New client connected");
  // if (interval) {
  //   clearInterval(interval);
  // }
  // interval = setInterval(() => getApiAndEmit(socket), 5000);
  getApiAndEmit(socket);
  socket.on("disconnect", () => {
    // console.log("Client disconnected");
  });
});

server.listen(port, () => console.log(`Chat Server Listening on port ${port}`));
