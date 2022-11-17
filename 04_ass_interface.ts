interface IStudent {
  id: number;
  firstName: string;
  lastName: string;
  address?:string;
  getFullName(): void;
};
const user: IStudent = {
  id: 11,
  firstName: "Sonali",
  lastName: "Karande",
  address:"Pune",
  getFullName(): void {
    console.log(`Student Full Name: ${this.firstName}  ${this.lastName}`);}
};
const user2: IStudent = {
  id: 22,
  firstName: "Swati",
  lastName: "Narale",
  getFullName(): void {
    console.log(` Student Full Name:${this.firstName} ${this.lastName}`); }
};
interface IPerson {
  name: string;
};
interface IEmployee {
  id: number;
  salary: number;
};
interface IDeveloper extends IPerson, IEmployee {
  language: string;
};

const dev: IDeveloper = {
  id: 1,
  name: 'Sonali',
  salary: 50000,
  language: 'TypeScript',
};
console.log("==========================Interface===============================");

console.log(user);
console.log(`Student Information 1:\nStudentID:${user.id}\nStudent First Name:${user.firstName}\nStudent Address:${user.address}\nStudent Last Name:${user.lastName}`);
user.getFullName();
 console.log(user2);
console.log(`Student Information 2:\nStudentID:${user2.id}\nStudent First Name:${user2.firstName}\nStudent Last Name:${user2.lastName}`);
user2.getFullName();
console.log("=========================Extend Interface==================================");
console.log(dev);
console.log(`Developer Info:Developer ID:${dev.id}\nDeveloper Name:${dev.name}\nDeveloper Salary:${dev.salary}\nDeveloper Language:${dev.language}`);



