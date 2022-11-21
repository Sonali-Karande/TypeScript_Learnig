
interface IOrganizer {
    id: number;
    name: string;
    description?: string;
    startTime?:string;
    address?:string
    display(): void;
  };

class Organizer implements IOrganizer{
    id: number;
    name: string;
    constructor( id:number, name:string) {
        this.id=id;
        this.name=name;
    }
    public display(): void {
        console.log(`Organizer Detail:\nOrganizer ID:${this.id}\nOrganizer Name:${this.name}`);
    }
}

class Event1 implements IOrganizer {
    id: number;
    name: string;
    description?: string;
    startTime?:string;
    address?:string
    constructor( id:number, name:string,description:string, startTime:string) {

        this.id=id;
        this.name=name;
        this.description = description;
        this.startTime = startTime;
    }
    display(): void;
    
    public display(): void {
        console.log(`Event Detail:\nEvent ID:${this.id}\nEvent Name:${this.name}\nEvent Description:${this.description}\nEvent Time:${this.startTime}`);
    }
}

class Venue implements IOrganizer {
    id: number;
    name: string;
    description?: string;
    startTime?:string;
    address?:string
    constructor( id:number, name:string,description:string, address:string) {
        this.id=id;
        this.name=name;
        this.description = description;
        this.address = address;
    }
public display(): void {
    console.log(`Venue Detail:\nVenue ID:${this.id}\nVenue Name:${this.name}\nVenue Description:${this.description}\nVenue Address:${this.address}`);
}
}




var objEvenMgmApp= new Organizer(1,"Sonali");
 objEvenMgmApp.display();
console.log("===========================================================================");

objEvenMgmApp=new Event1(1,"Birthday Party...","Birthday Celebration","7 PM");
objEvenMgmApp.display();

console.log("===========================================================================");

objEvenMgmApp=new Venue(1,"Taradevi lawns","Beautiful garden...","Near Bhairavnath Vidyalaya, High School Road, Bhigwan, Maharashtra 413130");
objEvenMgmApp.display();






