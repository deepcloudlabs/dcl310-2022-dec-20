const {Kafka, Partitioners} = require("kafkajs");
const kafka = new Kafka({
    clientId: "kafka-client",
    brokers: ["localhost:9092"]
});
const consumer = kafka.consumer({
    "groupId": "binance-consumer"
});
consumer.connect()
        .then(()=>{
            console.log("Connected to the kafka broker.");
            consumer.subscribe({"topic": "trades", fromBeginning: true})
                .then(()=>{
                    consumer.run({
                        eachMessage: async ({topic,partition,message})=> {
                            console.log(`New message has arrived: ${message.value}`);
                        }
                    }).then(()=>{
                        console.log("Kafka consumer is listening");
                    })
                })
        }).catch( err => console.error(err));