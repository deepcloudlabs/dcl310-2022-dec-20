let x = 1 / 0
console.log(x)
x = -1 / 0
console.log(x)
x = 0 / 0
console.log(x)
x++
console.log(x)
console.log(x === x)
console.log(Number.isNaN(x))
x = 3.1415
console.log(Number.isNaN(x))
console.log(Number.isFinite(x))
console.log(Number.isInteger(x))
x = Math.floor(x)
console.log(Number.isInteger(x))
x = 2.0 - 1.10
console.log(x)
x = 100 * 4.35
console.log(x)
x = (0.1 + 0.2) + 0.3
y = 0.1 + (0.2 + 0.3)
console.log(x === y)
x = 100000000000000100
console.log(x)
x = x + 50
console.log(x)
x = x + 50
console.log(x)
x = x + 50
console.log(x)
x = 9007199254740992
console.log(x)
x++;
console.log(x)
x += 2
console.log(x)
x = 0.1 + 0.2
console.log(x===0.3)
// https://mathjs.org/