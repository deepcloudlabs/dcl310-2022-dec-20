let numbers = [42, 15, 23, 8, 16, 4];
let sum = 0;
for(let number of numbers){
    if (number%2 === 0){
        let cube = number ** 3;
        sum += cube;
    }
}
console.log(sum)
// Functional Programming
sum =
numbers.filter(n => { console.log(`filter(${n})`); return n%2 === 0;})
       .map(u => { console.log(`map(${u})`); return u*u*u;})  // HoF
       .reduce((acc,n)=>{ console.log(`reduce(${acc},${n})`); return acc+n;}, 0) // HoF
console.log(sum)
