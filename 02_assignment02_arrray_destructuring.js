var array = ["J&J", "Pfizer", "Sputnik"];
console.log("Original Array:".concat(array));
console.log("***************************************************");
array.push("Covaxin");
console.log("After adding 'Covaxin:".concat(array));
console.log("***************************************************");
console.log("Array destructuring:");
var a = array[0], b = array[1], c = array[2], d = array[3];
console.log(a, b, c, d);
console.log("***************************************************");
console.log("Traversing Using for loop:");
for (var index = 0; index < array.length; index++) {
    console.log("".concat(array[index]));
}
