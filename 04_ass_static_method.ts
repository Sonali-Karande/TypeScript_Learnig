class Calculator {
    
    static addition(num1:number,num2:number) {

        return`Addition of ${num1} and ${num2} is:${ num1+num2}`;
    }
    static subtraction(num1:number,num2:number) {
        return`Subtraction of ${num1} and ${num2} is:${ num1-num2}`;

    }
    static multiplication(num1:number,num2:number) {
        
        return `Multiplication of ${num1} and ${num2} is:${num1*num2}`;

    }
    static division(num1:number,num2:number) {
        return`Division of ${num1} and ${num2} is:${ num1/num2}`;

    }
    static modulus(num1:number,num2:number) {
        return`Modulus of ${num1} and ${num2} is:${ num1%num2}`;

    }
}
console.log("==============================Calculator class with static method==========================================")
console.log(Calculator.addition(30,10));
console.log(Calculator.subtraction(30,10));
console.log(Calculator.multiplication(30,10));
console.log(Calculator.division(30,10));
console.log(Calculator.modulus(30,10));
console.log("=============================================================");

console.log(Calculator.addition(500,100));
console.log(Calculator.subtraction(14,9));
console.log(Calculator.multiplication(56,34));
console.log(Calculator.division(50,40));
console.log(Calculator.modulus(90,13));
