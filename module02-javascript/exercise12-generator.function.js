function* filter(array, predicateFn) { // generator function
    for (let element of array) {
        console.log(`filter(${element})`)
        if (predicateFn(element)) {
            yield element;
        }
    }
}

function* map(array, mapperFn) { // generator function
    for (let element of array) {
        console.log(`map(${element})`);
        yield mapperFn(element);
    }
}

function reduce(array, reduceFn, initialValue) {
    let accumulate = initialValue;
    for (let element of array) {
        console.log(`reduce(${accumulate},${element})`);
        accumulate = reduceFn(accumulate, element);
    }
    return accumulate;
}

let numbers = [42, 15, 23, 8, 16, 4];
let sum = reduce(map(filter(numbers, n => n % 2 === 0), u => u ** 3), (acc, n) => acc + n, 0);
console.log(`sum=${sum}`)