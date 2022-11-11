// Grade calculator 
// prompt use for getting value.
// math, physics , chem numeric type 
// calculate average of these three subject 
// divide result by three . 
// once you have average 
// you can use if else lader for grade .
// if avrage < 70 then C grade 
// if avarage  > 70 < 90 B grade 
// if avarage  > 90 A grade
var math=prompt("Please enter Maths marks","0")

console.log(`Maths Marks:${math}`);
var num1 = parseInt(math);


var physics=prompt("Please enter Physics marks","0")
console.log(`Physics Marks:${physics}`);
var num2 = parseInt(physics);

var chem=prompt("Please enter Chemistry  marks","0")
var num3 = parseInt(chem);

console.log(`Chemistry Marks:${chem}`);

function grade(math:number,physics:number,chem:number) {
    var sum=math+physics+chem;
    var sub_avg=sum/3;
if (sub_avg<70) {
return ` Total marks is:${sum} Agerage is:${sub_avg} Garde:C`;
    
} else if(sub_avg>70&&sub_avg<90) {
    return `Total marks is: ${sum} Agerage is: ${sub_avg}  Garde:B`;
    
}
else if (sub_avg>=90) {
    return `Total marks is:${sum} Agerage is:${sub_avg} Garde:A`;
    
}
else{
    return `Enter valid Number`;
}
}
var g=grade(num1,num2,num3)
console.log(g);
