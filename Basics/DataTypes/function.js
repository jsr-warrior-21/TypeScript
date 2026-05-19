"use strict";
//  function fruits():string{
//     return "Oranges"; // you must be return according to the return types of the function otherwise it will give error
// }
// // here the type of the function will be void - because youre not returning any thing neither you have declered
// function simple(){
// }
// //if you have returned any thing then that will be type of the function
// function anything(){ // type of the function will be number
//     return 21;
// }
// // never - when function stuck and never go till end then type of the function will be never
// function loop():never{
//     while(true){
//         console.log("InfiniteLoop");
//     }
// }
// // but if function is going till end or the function or function is terminating then you cann't assign never to this 
// // function hard():never{ ss
// //      // here you will get error because function is terminating and returning nothing so type will be void not never
// //     console.log("Hiii");
// // }
// // this will be never because here function is not terminating
// // function error():never{ 
// //     throw new Error("I am error");
// // }
// // type of the params of the function
function tprice(item) {
    var price = 100;
    console.log(price * item);
}
tprice(50);
