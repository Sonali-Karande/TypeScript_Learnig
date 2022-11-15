let array=["J&J","Pfizer","Sputnik"];
console.log(`Original Array:${array}`);
console.log("***************************************************");
array.push("Covaxin");
console.log(`After adding 'Covaxin:${array}`);
console.log("***************************************************");
console.log(`Array destructuring:`);

var[a,b,c,d]=array;
console.log(a,b,c,d);
console.log("***************************************************");
console.log(`Traversing Using for loop:`);
for (let index = 0; index < array.length; index++) {
    console.log(`${array[index]}`);

    
}
console.log("***************************************************");

for (const key in array) {
    if (Object.prototype.hasOwnProperty.call(array, key)) {
        const element = array[key];
        console.log(element);
        
    }
}
console.log("***************************************************");
for (const iterator of array) {
    console.log(iterator);
    //console.log(array[iterator]);

    
}
        
    



