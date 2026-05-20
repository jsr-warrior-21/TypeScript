// without generic particularly you have decided the type of the fucntion and return type and parameter

function fruits(name:string):string{
    return name;
}
console.log(fruits("Apple"));


// now with the help of the generic- now which type of the parameter you will pass that will become the return type of function,type of function and type of params also with the type safty

function genericFruits<T>(name:T):T{
    return name;
}

console.log(genericFruits(100));
console.log(genericFruits("Guava"));
console.log(genericFruits(true));

