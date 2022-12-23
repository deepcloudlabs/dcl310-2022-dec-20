const {Server} = require("socket.io");
const io = new Server(8200,{cors: {origin: "*"}});
let sessions = [];
io.on("connection",(session)=>{
    console.log(`New client has arrived: ${session.id}`)
    sessions.push(session);
    io.on("disconnect", () =>{
        console.log(`Connection is closed: ${session.id}`);
        sessions = sessions.filter(_session => _session.id !== session.id);
    })
});

exports.sessions = sessions;