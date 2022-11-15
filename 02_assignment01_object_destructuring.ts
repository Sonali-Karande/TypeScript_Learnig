var employee={
    emp_id:1,
    emp_name:"Sonali",
    emp_sal:50000,
    emp_city:"pune"
}
console.log("Employee Object");

console.log(employee);
console.log("********************************************************");

console.log("Employee Object Destructuring");

var{emp_id,emp_name,emp_sal,emp_city}=employee;
console.log(`ID:${emp_id} Name:${emp_name} Salary:${emp_sal} City:${emp_city}`);
console.log("********************************************************");

console.log("Traversing using for...in loop");

for (const key in employee) {

    console.log(key,employee[key]);
    
}
 