const io = require("socket.io-client");
const client = io.connect("http://localhost:4100");
client.on("connect",()=>{
   console.log("Connected to the server");
});