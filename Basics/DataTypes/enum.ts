
// here if your are not assiging any value then enum automatically will assign 0,1,2,3... 
// like student = 0,teacher=1,labstaff=2,....
enum whoTypes{
    student="Rakesh",
    teacher="Potheneni",
    labstaff="Kulkarni",
    management="TeamSahayak"
}

var who:whoTypes=whoTypes.labstaff // you cann't assign another values than what you have defined in the enum
console.log(who)