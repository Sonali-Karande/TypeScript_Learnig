class Organizer1 {
    public id:number;
    public name: string;
    public description:string;
    public startTime:string;
    public address:string;
    public display( id:number, name:string): any
      
    public display( id:string, name:string): string
    public display( id:any, name:any): any
    public display( id:any, name:string): any 
    {
        console.log(`Organizer Detail:\nOrganizer ID:${id}\nOrganizer Name:${name}`);
        return 0;
    }
}
  
var organiser=new Organizer1();
organiser.display(1,"sonali");
organiser.display("Swati","Pune");
organiser.display("Angular Developer","sonali");
organiser.display(123,"345");
