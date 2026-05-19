
// explicitly we have define the datatypes of var and then use at another place during creation of new thing

interface info{
    name:string,
    age:number,
    company:string
}



var studentdata:info = {
    name:"arvind",
    age:21,
    company:"oracle",
}

// if you want to add new datatypes then you can extends


interface studentsSubject extends info{
    subject:string
}

// now you can make a new object using newly created interface

var studentObject:studentsSubject ={
    name:"Arvind",
    age:21,
    company:"Oracle",
    subject:"Math"
}




