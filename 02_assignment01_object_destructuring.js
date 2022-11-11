var employee = {
    emp_id: 1,
    emp_name: "Sonali",
    emp_sal: 50000,
    emp_city: "pune"
};
console.log("Employee Object");
console.log(employee);
console.log("********************************************************");
console.log("Employee Object Destructuring");
var emp_id = employee.emp_id, emp_name = employee.emp_name, emp_sal = employee.emp_sal, emp_city = employee.emp_city;
console.log("ID:".concat(emp_id, " Name:").concat(emp_name, " Salary:").concat(emp_sal, " City:").concat(emp_city));
console.log("********************************************************");
console.log("Traversing using for...in loop");
for (var key in employee) {
    console.log(employee[key]);
}
