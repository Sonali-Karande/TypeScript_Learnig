var Passenger = /** @class */ (function () {
    function Passenger(fName, lName, frequentFlyerno) {
        this.fName = fName;
        this.lName = lName;
        this.frequentFlyerno = frequentFlyerno;
    }
    Passenger.prototype.display = function () {
        console.log(this.fName + " " + this.lName + " " + this.frequentFlyerno);
    };
    return Passenger;
}());
var passenger = new Passenger("Jack", "Sparrow", 102);
console.log(passenger.fName + " " + passenger.lName + " " + passenger.frequentFlyerno);
passenger.display();
var passenger2 = new Passenger("HArry", "Potter", 123);
passenger2.display();
console.log("====================================");
for (var item in passenger) {
    console.log(item);
    console.log(passenger[item]);
}
console.log("====================================");
for (var item in passenger) {
    if (item !== "display") {
        console.log(item);
        console.log(passenger[item]);
    }
}
console.log("====================================");
// for (const item in passenger) {
//     if(passenger[item] instanceof function)
//      {
//         continue;
//     }
//     else
//      {
//         console.log(item);
//         console.log(passenger[item]);
//     }
// }
