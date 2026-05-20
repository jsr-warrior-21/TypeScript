interface collegeType{
    name:string,
    age:number,
    location:string,
    college:string,
    semester:number
}

var studentDetails:Partial<collegeType>={
    name:"Arvind",
    age:21
}

var studentDetails2:Required<collegeType>={
    name:"Arvind",
    age:21,
    location:"Delhi",
    college:"IIT DELHI",
    semester:4
}

var studentDetails3:Readonly<collegeType>={
    name:"Arvind",
    age:21,
    location:"Delhi",
    semester:4,
    college:"IIT DELHI",
}

var studentDetails4:Pick<collegeType,'name'|'college'> ={
    name:"Arvind",
    college:"IIT ROORKE"
}