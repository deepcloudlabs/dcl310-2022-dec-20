function Counter(initialValue) { // outer function
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
};
let counter = Counter(42);
setInterval(counter.increment, 1_000);
setInterval(counter.printCounter, 5_000);
let counter2 = Counter(108);
let counter3 = Counter(549);
console.log(counter.value)
setInterval(counter2.increment, 1_000);
setInterval(counter2.printCounter, 3_000);
