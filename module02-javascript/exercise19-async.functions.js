function gun(){
    return new Promise((resolve,reject)=>{
        if (Math.random()>0.5)
            resolve(42);
        reject("Something is wrong");
    });
}

async function fun(){
    if (Math.random()>0.5)
        return 42;
    throw "Something is wrong";
}

fun().then( result => console.log(`Return value is ${result}`))
    .catch( err => console.log(`Error has occurred: ${err}`))
    .finally( () => console.log("Finally, we have arrived here!"))

