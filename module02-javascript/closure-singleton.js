const counter = (function(initialValue) { // outer function
    let value = initialValue;

    return {
        increment() { // inner function
            value++;
        },
        decrement() { // inner function
            value--;
        },
        printCounter() { // inner function
            console.log(`counter: ${value}`);
        },
        getCounter(){
            return value;
        }
    };
})(42); // IIF

setInterval(counter.increment, 1_000);
setInterval(counter.printCounter, 5_000);
