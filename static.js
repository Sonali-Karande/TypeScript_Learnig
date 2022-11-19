var Check = /** @class */ (function () {
    function Check() {
    }
    Check.prototype.display = function () {
        Check.bankName = "BOB";
        console.log(Check.bankName);
    };
    Check.bankName = "Bank of India";
    return Check;
}());
var objCheck = new Check();
var bankName = Check.bankName;
console.log(bankName);
objCheck.display();
