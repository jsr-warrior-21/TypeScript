var user:string[] = ['Arvind','Mussu'];
var age:number[]=[21,20];
var passion:Array<string>= ['Software Engineer','Software Engineer']
passion.push('Life Line'); // always push value of same data types


// for making strict so that no one can push another data type value in array you can use 

// -- ReadonlyArray

var strictarray:ReadonlyArray<string> = ['ak','bk','ck'] // now this is only readable you can't modifie it
