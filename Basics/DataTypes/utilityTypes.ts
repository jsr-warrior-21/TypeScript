interface collegeType{
    name:string,
    age:number,
    location:string,
    college:string,
    semester:number
}
// Partial
var studentDetails:Partial<collegeType>={
    name:"Arvind",
    age:21
}

// Required
var studentDetails2:Required<collegeType>={
    name:"Arvind",
    age:21,
    location:"Delhi",
    college:"IIT DELHI",
    semester:4
}

//Readonly
var studentDetails3:Readonly<collegeType>={
    name:"Arvind",
    age:21,
    location:"Delhi",
    semester:4,
    college:"IIT DELHI",
}

//Pick
var studentDetails4:Pick<collegeType,'name'|'college'> ={
    name:"Arvind",
    college:"IIT ROORKE"
}

// Omit
var studentDetails5:Omit<collegeType,'semester'>={
    name:"Arvind",
    age:21,
    location:"Delhi",
    college:"IIT DELHI",
}

//Exclude

type Apistatus = "pending" | "resolve" | "loading" | "error"

var apicalls:Exclude<Apistatus,'error'>;
apicalls="loading" // now  here you can not assign error to apicall

//nonnullable

type datatypeswithnonnullable = string | number | boolean | null | undefined;

var datatypeswithnonnullableDetail:NonNullable<datatypeswithnonnullable>;
datatypeswithnonnullableDetail="arvind" // now here in this var you cann't assing null or undefined vale


//Record

type siterole = 'admin' | 'user' | 'guest'
var siteroleoption:siterole='admin';
var rolename:Record<siterole,string>={
    admin:"arvind",
    user:"harsh",
    guest:"peter"
}