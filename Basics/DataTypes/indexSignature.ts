
// here we have define dynamic types now you can assign multiple value with the help of this type
// other wise there will be limitation when you define static type
type userDataType = {
    [key:string]:number;
}

// if you want that some key and value must be in the object then you can write like this

// type userDataType={
//     name:string,
//     age:number,
//     class:number,
//    readonly [key:string]:number | string | boolean;
// }

// you can also made class types readonly then no one can update the number of the key;

var userDetails:userDataType={
    age:21,
    class:12,
    sem:4,
    marks:96
}