var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(personName) {
        this.personName = personName;
    }
    Person.prototype.work = function () {
        console.log("In Person Class");
        console.log("Person Name:".concat(this.personName));
    };
    return Person;
}());
var Student1 = /** @class */ (function (_super) {
    __extends(Student1, _super);
    function Student1(personName, marks) {
        var _this = _super.call(this, personName) || this;
        _this.marks = marks;
        return _this;
    }
    Student1.prototype.work = function () {
        console.log("In Student Class");
        console.log("Student Name:".concat(this.personName, "\nStudent Marks is:").concat(this.marks));
    };
    return Student1;
}(Person));
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(personName, dept, salary) {
        var _this = _super.call(this, personName) || this;
        //this.personName=personName;
        _this.dept = dept;
        _this.salary = salary;
        return _this;
    }
    Employee.prototype.work = function () {
        console.log("In Employee Class");
        console.log("Employee Name:".concat(this.personName, "\nSEmployee department is:").concat(this.dept, "\nEmployee Salary is:").concat(this.salary));
    };
    return Employee;
}(Person));
var Trainer = /** @class */ (function (_super) {
    __extends(Trainer, _super);
    function Trainer(personName, experience, specialization) {
        var _this = _super.call(this, personName) || this;
        //this.personName=personName;
        _this.experience = experience;
        _this.specialization = specialization;
        return _this;
    }
    Trainer.prototype.work = function () {
        console.log("In Trainer Class");
        console.log("Trainer Name:".concat(this.personName, "\nExperience is:").concat(this.experience, "\nSpecialization:").concat(this.specialization));
    };
    return Trainer;
}(Person));
var person = new Person("Sonali");
person.work();
person = new Student1("Sonali", 100);
person.work();
person = new Employee("Sonali", "Computer", 23000);
person.work();
person = new Trainer("Sonali", 10, "Angular");
person.work();
console.log("=========================================");
