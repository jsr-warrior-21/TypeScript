type personA = {
    name:string
}
type personB = {
    age:number,
    company:string
}

type personC = personA & personB;  // here we did the intersection of both type of data 

var personAData:personA = {
    name:"AM"
}

var personBData:personB={
    age:21,
    company:"Oracle"
}

var personCData:personC={
    name:"AM",
    age:21,
    company:"Oracle"
}