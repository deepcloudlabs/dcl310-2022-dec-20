const {Kafka, Partitioners} = require("kafkajs");
const kafka = new Kafka({
    clientId: "kafka-client",
    brokers: ["localhost:9092"]
});
const consumer = kafka.consumer({
    "groupId": "binance-consumer"
});
const {Server} = require("socket.io");
const io = new Server(4100,{cors: {origin: "*"}});
let sessions = [];
io.on("connection",(session)=>{
    console.log(`New client has arrived: ${session.id}`)
    sessions.push(session);
    io.on("disconnect", () =>{
        console.log(`Connection is closed: ${session.id}`);
        sessions = sessions.filter(_session => _session.id !== session.id);
    })
});

consumer.connect()
        .then(()=>{
            console.log("Connected to the kafka broker.");
            consumer.subscribe({"topic": "trades", fromBeginning: true})
                .then(()=>{
                    consumer.run({
                        eachMessage: async ({topic,partition,message})=> {
                            //console.log(`New message has arrived: ${message.value}`);
                            sessions.forEach(session => session.emit("trades",message.value.toString()));
                        }
                    }).then(()=>{
                        console.log("Kafka consumer is listening");
                    })
                })
        }).catch( err => console.error(err));