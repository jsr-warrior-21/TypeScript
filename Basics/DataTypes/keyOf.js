"use strict";
let personData = {
    name: "Arvind",
    age: 30,
    isEmp: true
};
var personR;
personR = "name";
personR = "age";
personR = "isEmp";
// personR="color"; // this will give error because you have only three props name,age,isEmp due to keyof personT
// you can also use the key of the object 
var userXObject; // now here you can take only limited key of the personData object
