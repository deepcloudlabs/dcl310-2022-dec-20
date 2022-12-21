let x = "2" + "2"; // +: concat
console.log(x)
x = "2" + 2
console.log(x)
x = "2" * "2" // * : multiplication
console.log(x)
x = "two" * "iki"
console.log(x)
name="jack bauer"
console.log(name.length)
for (let i=0;i<name.length;++i)
    console.log(name.charAt(i))
x = "\u20ba"
console.log(x)
console.log(x.length)
x = "\ud834\udd1e"
console.log(x)
console.log(x.length)
// immutable
x = "kate austen";
console.log(x)
x = x.toUpperCase();
console.log(x)
city = "izmir"
console.log(city)
// language: ISO2, turkish -> tr, french: fr, ...
city = city.toLocaleUpperCase("tr")
console.log(city)


