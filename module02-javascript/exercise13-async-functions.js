function evens(array) { // synchronous function -> blocking
    let even_numbers = [];
    for (let element of array) {
        if (element % 2 === 0) {
            even_numbers.push(element);
        }
    }
    return even_numbers;
}

let numbers = evens([1,2,3,4,5,6,7,8,9,10]);
console.log(numbers)

function async_evens(array) { // asynchronous function -> non-blocking
    return new Promise((resolve,reject)=>{
        let even_numbers = [];
        for (let element of array) {
            if (element % 2 === 0) {
                even_numbers.push(element);
            }
        }
        if(Math.random()<0.5) reject("Something is wrong!");
        setTimeout(()=>resolve(even_numbers), 5_000)
    })
}
console.log("Before calling the async_evens()...")
async_evens([1,2,3,4,5,6,7,8,9,10]).then(nums => console.log(nums))
                                        .catch(err => console.log(err))
console.log("After calling the async_evens()...")

async function fun(array) { // asynchronous function -> blocking
    let even_numbers = [];
    for (let element of array) {
        if (element % 2 === 0) {
            even_numbers.push(element);
        }
    }
    return even_numbers;
}

fun([1,2,3,4,5,6,7,8,9,10]).then(nums => console.log(nums))
