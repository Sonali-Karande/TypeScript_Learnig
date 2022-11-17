// //dev 1
// interface IProduct{
//     id:number,
//     name:string,
//     description?:string,//optional parameter it will not throw error if we are not implementing it
//     price:number//declaration only
// }
// var objProduct:IProduct={
//     id:123,
//     name:"IPhone",
//     //description:"Its awesome",
//     price:9000//i gave implementation of IProduct interface
// }


interface IProduct {
    id:number;
    name:string;
    description?:string;//optional parameter it will not throw error if we are not implementing it
    price:number ; // declartion only in interface.
     display():void;
}

var objProduct : IProduct = {
    id : 123,
    name: "IPhone",
    description: "It's awesome",
    price: 60000, // I have given implementation for IProduct interface
    display():void{
        console.log(this.id+" "+this.name);
        
    }
}















