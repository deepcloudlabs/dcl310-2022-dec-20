function fun(a, b, c) {
    a = a || 5;
    b = b || 6;
    c = c || 3;
    return 3 * a + b * c;
};
let gun = function (a=5, b=6, c=3) {
    return 3 * a + b * c;
};
console.log(fun(5,6,7))
console.log(gun(5,6,7))
console.log(gun()) // NaN -> gun(5,6,3) -> 33
console.log(gun(1)) // NaN -> gun(1,6,3) -> 21
console.log(gun(1,2)) // NaN -> gun(1,2,3) -> 9
console.log(gun(1,2,3)) // 9
console.log(gun(1,2,3)) // 9
function sun(a, b, c) {
    if(arguments.length !== 3)
        throw "you must provide exactly three parameters!";
    return 3 * a + b * c;
};
console.log(sun(1,2,3));