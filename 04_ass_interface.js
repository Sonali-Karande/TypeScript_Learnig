;
var user = {
    id: 11,
    firstName: "Sonali",
    lastName: "Karande",
    address: "Pune",
    getFullName: function () {
        console.log("Student Full Name: ".concat(this.firstName, "  ").concat(this.lastName));
    }
};
var user2 = {
    id: 22,
    firstName: "Swati",
    lastName: "Narale",
    getFullName: function () {
        console.log(" Student Full Name:".concat(this.firstName, " ").concat(this.lastName));
    }
};
;
;
;
var dev = {
    id: 1,
    name: 'Sonali',
    salary: 50000,
    language: 'TypeScript'
};
console.log("==========================Interface===============================");
console.log(user);
console.log("Student Information 1:\nStudentID:".concat(user.id, "\nStudent First Name:").concat(user.firstName, "\nStudent Address:").concat(user.address, "\nStudent Last Name:").concat(user.lastName));
user.getFullName();
console.log(user2);
console.log("Student Information 2:\nStudentID:".concat(user2.id, "\nStudent First Name:").concat(user2.firstName, "\nStudent Last Name:").concat(user2.lastName));
user2.getFullName();
console.log("=========================Extend Interface==================================");
console.log(dev);
console.log("Developer Info:Developer ID:".concat(dev.id, "\nDeveloper Name:").concat(dev.name, "\nDeveloper Salary:").concat(dev.salary, "\nDeveloper Language:").concat(dev.language));
