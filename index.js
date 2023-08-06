const http = require("http");
const express = require("express");
const WebSocket = require("ws");
const path = require("path");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
const PORT = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, "client")));

app.get("/", function (req, res) {
  res.sendFile(path.resolve(__dirname, "client", "index.html"));
});

wss.on("connection", function (ws) {
  console.log(`New client: ${ws.id}`);

  ws.on("message", (data) => {
    console.log(`New message: ${data}`);
    ws.send(`Hello ${data}`);
  });
});

server.listen(PORT, function () {
  console.log("Server running");
});
