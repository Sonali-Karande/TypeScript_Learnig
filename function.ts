function doubleMe(x:number);//declaration 
function doubleMe(x:string);
function doubleMe(arr:string[]);
function doubleMe(x:any)//function impletation
 // function implementation
// checking input parameter as number or not

{
    if (x && typeof x==="number") {
        console.log(x*2);
        
    }
    // checking input para as string or not

    else if (x && typeof x==="string") {
        console.log(x+" "+x);
        
    }
    else if(Array.isArray(x)){
    return x.map((name)=>console.log(name+" "+name))
    }
}
doubleMe(2);//function calling
doubleMe("Jhon");
doubleMe(["Codemind", "tet"]);

var product=function(...nums)
{
    var result=1;
    for (let index = 0; index < nums.length; index++) {
console.log(nums[index]);
        result*=nums[index];
    }
    return result;
}
console.log(product(2,3,4,5));
var hello=(name:string):string=>{
    return "hello" +name;
};
console.log(hello("AngularBatch4"));
var multiply = (num1:number, num2:number):number=> {
    return num1 * num2;
}

console.log(multiply(2,7));














