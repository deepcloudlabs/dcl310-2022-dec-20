const binanceWsUrl = "wss://stream.binance.com:9443/ws/btcusdt@trade";
const Websocket = require("ws");
const ws = new Websocket(binanceWsUrl);
ws.on("message", frame => {
    const trade = JSON.parse(frame);
    console.log(frame.toString());
});
