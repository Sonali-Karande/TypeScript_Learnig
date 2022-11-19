class Student{
    private  _userName:string;
    get name():string{
        return this._userName;
    }
    set name(name:string){
        if (name=="codemind") {
        this._userName=name;
            
        }
    }
    display()
    {
        console.log(this._userName);
        
    }
}
var objStudent=new Student();
objStudent.display();
objStudent.name="codemind";
console.log(objStudent.name);
