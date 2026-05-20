class exStatic{
    static name:string="Google"; // this name will be access with the help of class name only neither with the help of this neither with the help of the instance
    static getname(){
        return "Google and X";
    }
}

var instnc = new exStatic();
// console.log(instnc.name); // here we are getting error because we have made name as a static keyword
// when we make a var as static then that will become the part of class only not the part of object thats why we are getting error

// now what we will do  - we will call with class name not with object name

console.log(exStatic.name); // this is correct
console.log(exStatic.getname());


