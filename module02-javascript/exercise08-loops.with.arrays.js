let numbers = [42, 15, 23, 8, 16, 4]
numbers[10] = 10
// External Loop #1
for (let i = 0; i < numbers.length; ++i) {
    let number = numbers[i];
    if (number)
        console.log(number);
}
// External Loop #2
for (let i in numbers) {
    let number = numbers[i];
    console.log(number);
}
// External Loop #3
for (let number of numbers) {
    if (number)
        console.log(number);
}
// Internal Loop #4
// forEach: Higher-Order Function
numbers.forEach(function(number,index,arr){
   if (index===0)
       console.log("===========================")
   console.log(number)
   if (index===arr.length-1)
       console.log("===========================")
})
// Functional Programming
