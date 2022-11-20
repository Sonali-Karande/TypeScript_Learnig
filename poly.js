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
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.Print = function () {
        console.log("Employee details");
    };
    return Employee;
}());
var Manger = /** @class */ (function (_super) {
    __extends(Manger, _super);
    // constructor 
    function Manger(firstName, lastName, designation) {
        var _this = 
        // calling parent class constructor.
        _super.call(this) || this;
        _this.firstName = firstName;
        _this.lastName = lastName;
        _this.designation = designation;
        return _this;
    }
    // overriding parent class print method .
    Manger.prototype.Print = function () {
        _super.prototype.Print.call(this);
        console.log("".concat(this.firstName, " ").concat(this.lastName, " - ").concat(this.designation));
    };
    return Manger;
}(Employee));
var Lead = /** @class */ (function (_super) {
    __extends(Lead, _super);
    // constructor 
    function Lead(firstName, lastName, designation) {
        var _this = 
        // calling parent class constructor.
        _super.call(this) || this;
        _this.firstName = firstName;
        _this.lastName = lastName;
        _this.designation = designation;
        return _this;
    }
    // overriding parent class print method .
    Lead.prototype.Print = function () {
        _super.prototype.Print.call(this);
        console.log("".concat(this.firstName, " ").concat(this.lastName, " - ").concat(this.designation));
    };
    return Lead;
}(Employee));
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    // constructor 
    function Developer(firstName, lastName, designation) {
        var _this = 
        // calling parent class constructor.
        _super.call(this) || this;
        _this.firstName = firstName;
        _this.lastName = lastName;
        _this.designation = designation;
        return _this;
    }
    // overriding parent class print method .
    Developer.prototype.Print = function () {
        _super.prototype.Print.call(this);
        console.log("".concat(this.firstName, " ").concat(this.lastName, " - ").concat(this.designation));
    };
    return Developer;
}(Employee));
var employees = new Array(new Manger("Jack", "Sparrow", "Manger"), new Lead("Sumit", "Pande", "Lead"), new Developer("Dnyanesh", "Surya", "Developer"));
for (var _i = 0, employees_1 = employees; _i < employees_1.length; _i++) {
    var emp = employees_1[_i];
    emp.Print();
}
