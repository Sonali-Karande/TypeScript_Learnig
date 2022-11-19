class Check{
    static bankName:string="Bank of India";
    cusomerName:string;
    accNo:number;
    display(){
        Check.bankName="BOB";
        console.log(Check.bankName);
        
    }
}
var objCheck=new Check();
var bankName=Check.bankName;
console.log(bankName);

objCheck.display();