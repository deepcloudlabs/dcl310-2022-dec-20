let circle1 = {x: 0, y: 0, features: {thickness: 10, color: "red"}, radius: 100};
let circle2 = JSON.parse(JSON.stringify(circle1));
circle2.x++;
console.log(circle1.x)
console.log(circle2.x)
circle2.features.thickness++;
console.log(circle1.features.thickness)
console.log(circle2.features.thickness)