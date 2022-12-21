let circle1 = {x: 0, y: 0, features: {thickness: 10, color: "red"}, radius: 100};
let circle2 = {...circle1};
circle2.features = {...circle1.features}
circle2.x++;
console.log(circle1.x)
console.log(circle2.x)
circle2.features.thickness++;
console.log(circle1.features.thickness)
console.log(circle2.features.thickness)
for (let prop in circle1){
    if (typeof(circle1[prop]) === "object"){
        for (let prop2 in circle1[prop]) {
            console.log(prop2);
        }
    } else {
            console.log(prop);
    }
}