class Organizer {
    public id:number;
    public name: string;
    public description:string;
    public startTime:string;
    public address:string;
    constructor( id:number, name:string) {
        // calling parent class constructor.
        this.id=id;
        this.name=name;
    }
    public display(): void {
        console.log(`Organizer Detail:\nOrganizer ID:${this.id}\nOrganizer Name:${this.name}`);
    }
}

class Event1 extends Organizer {

    // constructor 
    constructor( id:number, name:string,description:string, startTime:string) {
        // calling parent class constructor.
        super(id,name);

        this.id=id;
        this.name=name;
        this.description = description;
        this.startTime = startTime;
    }
    // overriding parent class print method .
    public display(): void {
        //super.display();
        console.log(`Event Detail:\nEvent ID:${this.id}\nEvent Name:${this.name}\nEvent Description:${this.description}\nEvent Time:${this.startTime}`);
    }
}

class Venue extends Organizer {

   // constructor 
   constructor( id:number, name:string,description:string, address:string) {
    // calling parent class constructor.
    super(id,name);
    this.id=id;
    this.name=name;
    this.description = description;
    this.address = address;
}
// overriding parent class print method .
public display(): void {
    console.log(`Venue Detail:\nVenue ID:${this.id}\nVenue Name:${this.name}\nVenue Description:${this.description}\nVenue Address:${this.address}`);
}
}




var objEvenMgmApp= new Organizer(1,"Sonali");
 objEvenMgmApp.display();
console.log("===========================================================================");

objEvenMgmApp=new Event1(1,"Birthday Party...","Birthday Celebration","7 AM");
objEvenMgmApp.display();

console.log("===========================================================================");

objEvenMgmApp=new Venue(1,"Taradevi lawns","Beautiful garden...","Near Bhairavnath Vidyalaya, High School Road, Bhigwan, Maharashtra 413130");
objEvenMgmApp.display();




// let organizer: Organizer[] = new Array(new Organizer(1,"Sonali"),new Event1(1,"Birthday Party...","Birthday Celebration","7 AM"),new Venue(1,"Taradevi lawns","Beautiful garden...","Near Bhairavnath Vidyalaya, High School Road, Bhigwan, Maharashtra 413130"));
// for (const item of organizer) {
//     console.log(item);
//     console.log(organizer);
    
//    // console.log(Organizer[item]);
    
// }
// for (const key in objEvenMgmApp) {
  
//     console.log(objEvenMgmApp[key]);
    
        
//     }



