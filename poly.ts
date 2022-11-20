class Employee {
    public firstName: string;
    public lastName: string;
    public designation: string;

    public Print(): void {
        console.log("Employee details");
    }
}

class Manger extends Employee {

    // constructor 
    constructor(firstName: string, lastName: string, designation: string) {
        // calling parent class constructor.
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
    }
    // overriding parent class print method .
    public Print(): void {
        super.Print()
        console.log(`${this.firstName} ${this.lastName} - ${this.designation}`);
    }
}

class Lead extends Employee {

    // constructor 
    constructor(firstName: string, lastName: string, designation: string) {
        // calling parent class constructor.
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
    }
    // overriding parent class print method .
    public Print(): void {
        super.Print()
        console.log(`${this.firstName} ${this.lastName} - ${this.designation}`);
    }
}

class Developer extends Employee {

    // constructor 
    constructor(firstName: string, lastName: string, designation: string) {
        // calling parent class constructor.
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
    }
    // overriding parent class print method .
    public Print(): void {
        super.Print()
        console.log(`${this.firstName} ${this.lastName} - ${this.designation}`);
    }
}


let employees: Employee[] = new Array(new Manger("Jack", "Sparrow", "Manger"), new Lead("Sumit", "Pande", "Lead"), new Developer("Dnyanesh", "Surya", "Developer"));

for(var emp of employees) {
    emp.Print();
}
//type conversion
let courses=["Anguler","React","Nodejs"];
console.log(courses.toLocaleString());

interface IEmployee{
    id:number;
}
let e1:IEmployee;
let e2={id:123,name:"sonali"}
e1=e2;//type casting
//e2=e1;//error




