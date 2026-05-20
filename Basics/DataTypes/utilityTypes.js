"use strict";
// Partial
var studentDetails = {
    name: "Arvind",
    age: 21
};
// Required
var studentDetails2 = {
    name: "Arvind",
    age: 21,
    location: "Delhi",
    college: "IIT DELHI",
    semester: 4
};
//Readonly
var studentDetails3 = {
    name: "Arvind",
    age: 21,
    location: "Delhi",
    semester: 4,
    college: "IIT DELHI",
};
//Pick
var studentDetails4 = {
    name: "Arvind",
    college: "IIT ROORKE"
};
// Omit
var studentDetails5 = {
    name: "Arvind",
    age: 21,
    location: "Delhi",
    college: "IIT DELHI",
};
var apicalls;
apicalls = "loading"; // now  here you can not assign error to apicall
var datatypeswithnonnullableDetail;
datatypeswithnonnullableDetail = "arvind"; // now here in this var you cann't assing null or undefined vale
var siteroleoption = 'admin';
var rolename = {
    admin: "arvind",
    user: "harsh",
    guest: "peter"
};
