interface IExrerior{
    color:string;
    numOfDoors:number
}
interface INterior{
    seats:number;
    auto:boolean
}
interface ICar extends IExrerior,INterior{//interface extendas interface
    make:string;
    model:string;
    year:number
}
var myCar:ICar={
    make:"TATA",
    model:"Altroz",
    year:2022,
    color:"Gray",
    numOfDoors:4,
    seats:4,
    auto:false
}
console.log(myCar);
console.log(myCar.make);

