var Student = /** @class */ (function () {
    function Student() {
    }
    Object.defineProperty(Student.prototype, "name", {
        get: function () {
            return this._userName;
        },
        set: function (name) {
            this._userName = name;
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.display = function () {
        console.log(this._userName);
    };
    return Student;
}());
var objStudent = new Student();
objStudent.name = "Jack";
console.log(objStudent.name);
