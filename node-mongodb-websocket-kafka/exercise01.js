const tickersUrl = "https://api.binance.com/api/v3/ticker/price";

import fetch from "node-fetch";
async function retrieveSymbols(){
    const symbols = await fetch(tickersUrl).then(res => res.json())
                        .then(tickers => tickers.map( ticker => ticker.symbol));
    const promises= [];
    for (let symbol of symbols){
        const ticker = fetch(`${tickersUrl}?symbol=${symbol}`).then(res=>res.json());
        promises.push(ticker);
    }
    //const tickers = await Promise.all(promises);
    //tickers.forEach(ticker => console.log(ticker));
    const ticker = await Promise.any(promises);
    console.error(ticker);
}

retrieveSymbols().then(() => console.log("Application is done."))