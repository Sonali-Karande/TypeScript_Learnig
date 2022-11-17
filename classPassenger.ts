class Passenger{
    fName:string;
    lName:string;
    frequentFlyerno:number
    constructor(fName:string,lName:string,frequentFlyerno:number){
        this.fName=fName;
        this.lName=lName;
        this.frequentFlyerno=frequentFlyerno;
    }
}
var passenger=new Passenger("Jack","Sparow",102);
console.log(passenger.fName+" "+passenger.lName+" "+passenger.frequentFlyerno);
