var emp={
    name:"Sonali",
    age:32
}
for (const key in emp) {
    console.log(key);
    
}
// const str="Opportunities does not happen you create them";
// for (const iterator of str) {
//     console.log(str[iterator]);
    
// }
var course:any=["Angular","ReactJs",".NET"];
course.push("Java");
course.push(10);
for (let index = 0; index < course.length; index++) {
console.log(course[index]);
    
}
var x=course[0];
var x=course[1];
var[a,b,c]=course;//array destructuring
console.log(a);
console.log(b);
console.log(c);
var std={
    fName:"Sonali",
    lName:"Karande"
}
var{fName:userFname,lName:userLname}=std;//object destructuring
//console.log(fName ,lName);
console.log(userFname,userLname);

console.log(std);
var arr:number[]=[20,30,12,100,20];
arr.splice(2,3,88,99);
console.log(arr.toString());

function addsssss(num1:number,num2:number) {
    return num2+num1;
}
console.log(add(10,20));

function display(id:number,name:string,role?:string) {
    console.log(`ID:${id}`);
    console.log(`Name:${name}`);
    if(role!= undefined)
    {
        console.log("Role", role);
    }
    

    console.log(`Role:${role}`);
    
}
console.log(display(1,"sonali","admin"));
console.log(display(2,"sonali"));

function display1(id:number,name:string,role:string="Gest user") {
    console.log(`ID:${id}`);
    console.log(`Name:${name}`);
    console.log(`Role:${role}`);
    
}
console.log(display1(2,"sonali"));
console.log(display1(1,"sonali","admin"));
