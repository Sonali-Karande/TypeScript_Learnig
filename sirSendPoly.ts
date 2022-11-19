class Person{
    work(){
        console.log("I am from person class");

    }

}
class Student1 extends Person{
   work(){
       console.log("I am student of codemind");

   }

}
class Employee extends Person{
   work(){
       console.log("I am employee of Mediprobe");

   }

}
class Trainer extends Person{
   work(){
       console.log("I am a Typescript trainer");

   }

}
var person= new Person();
 person.work();
person=new Student1();
person.work();

person=new Employee();
person.work();

person=new Trainer();
person.work();
for (const key in person) {
    console.log(person[key]);
    
        
    
}