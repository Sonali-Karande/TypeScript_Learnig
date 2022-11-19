class Person{
    personName:string;
    constructor( personName:string)
    {
        this.personName=personName;
    }
    work():any{
    console.log("In Person Class");

console.log(`Person Name:${this.personName}`);
    }
}
class Student1 extends Person {
    personName:string;
    marks:number
    constructor( personName:string,marks:number)
    {
        
        super(personName)
        this.marks=marks;
    }

work():any{
    console.log("In Student Class");
    
console.log(`Student Name:${this.personName}\nStudent Marks is:${this.marks}`);
}
}
class Employee extends Person {
    //personName:string;
    dept:string;
    salary:number;
    constructor( personName:string,dept:string,salary:number)
    {
        super(personName)
        //this.personName=personName;
        this.dept=dept;
        this.salary=salary;

    }
    
work():any{
    console.log("In Employee Class");

console.log(`Employee Name:${this.personName}\nSEmployee department is:${this.dept}\nEmployee Salary is:${this.salary}`);

}
}
class Trainer extends Person {
   
    //personName:string;
    experience:number;
    specialization:string
    constructor( personName:string,experience:number,specialization:string)
    {
        super(personName)
        //this.personName=personName;
        this.experience=experience;
        this.specialization=specialization;

    }
work():any{
    console.log("In Trainer Class");
    
console.log(`Trainer Name:${this.personName}\nExperience is:${this.experience}\nSpecialization:${this.specialization}`);

}
}

var person= new Person("Sonali");
person.work();
person=new Student1("Sonali",100);
person.work();

person=new Employee("Sonali","Computer",23000);
person.work();

person=new Trainer("Sonali",10,"Angular");
person.work();








