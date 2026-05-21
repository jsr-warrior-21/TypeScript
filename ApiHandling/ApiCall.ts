type apiTypes={
    userId:number,
    id:number,
    title:string,
    completed:boolean
}
async function apicall():Promise<apiTypes>{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    console.log(data);
}
apicall().then((data)=>{
    console.log(data)
});

// without .then() you can handle also
try {
    async function call (){
        const data = await apicall();
        console.log(data);
    }
} catch (error) {
    console.log(error);
    
}