"use strict";
async function apicall() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    console.log(data);
}
apicall().then((data) => {
    console.log(data);
});
