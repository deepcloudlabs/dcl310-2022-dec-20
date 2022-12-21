let numbers = [42, 15, 23, 8, 16, 4]
let serial_number = JSON.stringify(numbers);
console.log(serial_number) // "[42, 15, 23, 8, 16, 4]"
console.log(typeof(serial_number))

let employees = []
employees.push({id: "1", fullname: "jack"})
employees.push({id: "2", fullname: "kate"})
console.log(JSON.stringify(employees)) // "[{"id": "1",...}]"