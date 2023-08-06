const sendbtn = document.querySelector("#send");
const nameInput = document.querySelector("#name");
const messageInput = document.querySelector("#message");

const wsc = new WebSocket(`ws://${location.hostname}:${location.port}`);

wsc.onopen = function () {
  // wsc.send("Hello from client");
};

wsc.onmessage = function (message) {
  console.log("New message: " + message.data);
  messageInput.value += `${message.data}` + "\r\n";
};

sendbtn.addEventListener("click", () => {
  wsc.send(nameInput.value);
});
