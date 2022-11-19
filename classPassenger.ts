class Passengerr{
    fName:string;
    lName:string;
    frequentFlyerno:number
    constructor(fName:string,lName:string,frequentFlyerno:number){
        this.fName=fName;
        this.lName=lName;
        this.frequentFlyerno=frequentFlyerno;
    }
    display(){
        console.log(this.fName+" "+this.lName+" "+this.frequentFlyerno);
        
    }
}
var passengerr=new Passengerr("Jack","Sparrow",102);
console.log(passengerr.fName+" "+passengerr.lName+" "+passengerr.frequentFlyerno);
passengerr.display();
var passengerr2=new Passengerr("HArry","Potter",123);
passengerr2.display();
console.log("====================================");
for (const item in passengerr) {
   console.log(item);
   console.log(passengerr[item]);
}
console.log("====================================");

for (const item in passengerr) {
    if(item!=="display"){
   console.log(item);
   console.log(passengerr[item]);
    }
}
console.log("====================================");

for (const item in passengerr) {
    if(passengerr[item]instanceof Function)
    
     {
        continue;
    }
    else

     {
        console.log(item);
        console.log(passengerr[item]);
    }
}