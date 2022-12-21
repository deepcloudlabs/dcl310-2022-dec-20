let numbers = [42, 15, 23, 8, 16, 4]
console.log(numbers)
// Higher-Order Function
// Pure Function: Lambda Expression
numbers.sort((x, y) => x - y)
console.log(numbers)
numbers.sort((x, y) => y - x)
console.log(numbers)

console.log(numbers.indexOf(23)) // 1
console.log(numbers.indexOf(32)) // -1
console.log(numbers.includes(23)) // true
console.log(numbers.includes(32)) // false
numbers = [1, 3, 1, 5, 1, 7, 1, 9]
let index= numbers.indexOf(1);
while (index > -1){
    console.log(`Found 1 at ${index}.`)
    index++;
    index= numbers.indexOf(1, index);
}