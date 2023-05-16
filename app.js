const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

const port = process.env.PORT || 3000;

app.use(express.static("public"));

var users = [];

io.on("connection", (socket) => {
  socket.on("user name", (userName) => {
    const newUser = {
      userName: userName,
      socket: socket,
    }
    console.log(userName);
})
socket.on("chat message", (msg) => {
  // emit sends to everyone
  io.emit("chat message", msg);
});
console.log("a new user connected");
socket.on("disconnect", () => {
  console.log("user disconnected");
});
});

http.listen(port, () => {
  console.log(`listening on port:${port}`);
});
