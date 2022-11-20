class Organizer1 {
    public id:number;
    public name: string;
    public description:string;
    public startTime:string;
    public address:string;
 
    public display( id:number, name:string): any {
        console.log(`Organizer Detail:\nOrganizer ID:${id}\nOrganizer Name:${name}`);
        return 0;
    }
    public display(id:number, name:string,description:string, startTime:string): any {
        //super.display();
        console.log(`Event Detail:\nEvent ID:${id}\nEvent Name:${name}\nEvent Description:${description}\nEvent Time:${startTime}`);
        return 0;
   
   
    }
    public display(id:number, name:string,description:string, address:string): any {
        console.log(`Venue Detail:\nVenue ID:${id}\nVenue Name:${name}\nVenue Description:${description}\nVenue Address:${address}`);
        return 0;
    
    }
}
var organiser=new Organizer1();
organiser.display(1,"sonali");
organiser.display(1,"sonali","dfgh","fhjj");
organiser.display(1,"sonali","3445","vghhh");
