function fun() {
    for (let i = 0; i < 10; ++i) {
        console.log(`i=${i}`)
    }
    {
        const pi = 3.14;
        let e = 2;
        e++;
        console.log(pi)
        console.log(e)
    }
    // Error: console.log(`e=${e}`)
    // Error: console.log(`pi=${pi}`)
}

fun();
