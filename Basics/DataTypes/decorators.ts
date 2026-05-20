function classlogger(constructor:Function){
    console.log(constructor.name);
    console.log(constructor.prototype);
    
    
}

// this is a symple class
@classlogger // here we have use our decorator which give you details of the you math class
class math{
    batch:string;
    price:number;
    constructor(x:string,y:number){
        this.batch=x;
        this.price=y;
    }
}

var mathDetailing = new math("Arambh",2100);