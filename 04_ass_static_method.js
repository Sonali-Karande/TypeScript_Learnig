var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.addition = function (num1, num2) {
        return "Addition of ".concat(num1, " and ").concat(num2, " is:").concat(num1 + num2);
    };
    Calculator.subtraction = function (num1, num2) {
        return "Subtraction of ".concat(num1, " and ").concat(num2, " is:").concat(num1 - num2);
    };
    Calculator.multiplication = function (num1, num2) {
        return "Multiplication of ".concat(num1, " and ").concat(num2, " is:").concat(num1 * num2);
    };
    Calculator.division = function (num1, num2) {
        return "Division of ".concat(num1, " and ").concat(num2, " is:").concat(num1 / num2);
    };
    Calculator.modulus = function (num1, num2) {
        return "Modulus of ".concat(num1, " and ").concat(num2, " is:").concat(num1 % num2);
    };
    return Calculator;
}());
console.log("==============================Calculator class with static method==========================================");
console.log(Calculator.addition(30, 10));
console.log(Calculator.subtraction(30, 10));
console.log(Calculator.multiplication(30, 10));
console.log(Calculator.division(30, 10));
console.log(Calculator.modulus(30, 10));
console.log("=============================================================");
console.log(Calculator.addition(500, 100));
console.log(Calculator.subtraction(14, 9));
console.log(Calculator.multiplication(56, 34));
console.log(Calculator.division(50, 40));
console.log(Calculator.modulus(90, 13));
