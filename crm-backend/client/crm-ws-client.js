const io = require("socket.io-client");
const client = io.connect("http://localhost:8200");
client.on("connect",()=>{
    console.log("Connected to the server");
    client.on("customer-events", (msg)=>{
        console.log(msg.toString())
    });
});