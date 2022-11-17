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
var objProduct = {
    id: 123,
    name: "IPhone",
    description: "It's awesome",
    price: 60000,
    display: function () {
        console.log(this.id + " " + this.name);
    }
};
