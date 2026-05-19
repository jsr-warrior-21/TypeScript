"use strict";
// here if your are not assiging any value then enum automatically will assign 0,1,2,3... 
// like student = 0,teacher=1,labstaff=2,....
var whoTypes;
(function (whoTypes) {
    whoTypes["student"] = "Rakesh";
    whoTypes["teacher"] = "Potheneni";
    whoTypes["labstaff"] = "Kulkarni";
    whoTypes["management"] = "TeamSahayak";
})(whoTypes || (whoTypes = {}));
var who = whoTypes.labstaff; // you cann't assign another values than what you have defined in the enum
console.log(who);
