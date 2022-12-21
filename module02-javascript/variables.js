var x = 42; // global scope

function fun(){
    var y=108; // block/local/function scope
}

console.log(x);
//console.log(y);
fun();
//console.log(y);
