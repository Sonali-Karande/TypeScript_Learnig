var Passenger = /** @class */ (function () {
    function Passenger(fName, lName, frequentFlyerno) {
        this.fName = fName;
        this.lName = lName;
        this.frequentFlyerno = frequentFlyerno;
    }
    return Passenger;
}());
var passenger = new Passenger("Jack", "Sparow", 102);
console.log(passenger.fName + " " + passenger.lName + " " + passenger.frequentFlyerno);
