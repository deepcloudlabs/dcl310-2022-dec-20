const binanceWsUrl = "wss://stream.binance.com:9443/ws/btcusdt@trade";
const Websocket = require("ws");
const ws = new Websocket(binanceWsUrl);
const {Kafka, Partitioners} = require("kafkajs");
const kafka = new Kafka({
    clientId: "binance-client",
    brokers: ["localhost:9092"]
});

async function app() {

    const producer = kafka.producer({
        createPartitioner: Partitioners.LegacyPartitioner
    });

    producer.connect()
        .then(() => {
            console.log("Connected to the kafka broker.");
            ws.on("message", frame => {
                const trade = JSON.parse(frame);
                const message = {
                              "symbol": trade.s,
                              "price": Number(trade.p),
                              "quantity": Number(trade.q),
                              "volume": Number(trade.p) * Number(trade.q)
                }
                producer.send({
                    "topic": "trades",
                    messages: [
                        {"key": trade.s, "value": JSON.stringify(message)}
                    ]
                })
                //console.log(frame.toString());
            });
        })
        .catch(err => console.error(err))

}

app().then(()=>console.log("App is running..."))
