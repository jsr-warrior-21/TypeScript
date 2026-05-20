type personT={
    name:string,
    age:number,
    isEmp:boolean
}

let personData:personT={
    name:"Arvind",
    age:30,
    isEmp:true
}

type personB =  keyof personT;
var personR:personB;
personR="name";
personR="age";
personR="isEmp";
// personR="color"; // this will give error because you have only three props name,age,isEmp due to keyof personT