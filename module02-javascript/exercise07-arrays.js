let numbers = [42, 15, 23, 8, 16, 4]
console.log(numbers)
console.log(numbers.length)
let array1 = new Array(42, 15, 23, 8, 16, 4)
console.log(array1)
console.log(array1.length)
let array2 = new Array(4)
console.log(array2)
console.log(array2.length)
console.log(numbers[0]) // 42
console.log(numbers[1]) // 15
console.log(numbers[5]) // 4
console.log(numbers[-1]) // ?
// null
// undefined
numbers[100] = null
console.log(numbers[100]) // null
console.log(numbers.length)
numbers[-1] = "minus one"
console.log(numbers.length)
console.log(numbers[-1]) // "minus one"
console.log(numbers["-1"]) // "minus one"
numbers[[]] = "what is this?"
console.log(numbers.length)
let i = []
console.log(numbers[i])
numbers[{}] = "what is that?"
let j = {}
console.log(numbers[j])
console.log(numbers["[object Object]"])
unitCircle = {}
unitCircle.x = 0
unitCircle.y = 0
unitCircle.radius = 1
unitCircle.color = "blue"
console.log(unitCircle.x)
console.log(unitCircle.radius)
console.log(unitCircle.color)
console.log(unitCircle["x"])
console.log(unitCircle["radius"])
console.log(unitCircle["color"])
let employees = []
employees.push({id: "1", fullname: "jack"})
employees.push({id: "2", fullname: "kate"})
employees.size = employees.length
employees["size"]