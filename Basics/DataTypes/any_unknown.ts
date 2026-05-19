
// now you can assign any type of value to value varriable
var value:any;
value = "string";
value = 20;
value = true;
value = ['Hii']

// unknown

var value1:unknown;
value1="Ram";
value1=21;
value1=true

// now do operation without type checking - you will got error

// var value2 = value1.toUpperCase();

// now do operation with type cheking - you willn't get any error

if(typeof(value1)=='string'){
    var value3 = value1.toUpperCase();
    console.log(value3);
}