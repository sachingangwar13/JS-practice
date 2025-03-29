
function fetchUserData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({name:"sachin" , age:22});
        } , 3000)
    })
}

/*  
        async function always returns a Promise.f the function returns a value, the Promise resolves with that value. 
        If the function throws an error, the Promise rejects with that error.

        The await keyword can only be used inside an async function. 
        await pauses the execution of the function until the Promise resolves or rejects.
*/
async function getData(){

    try {
        console.log(`fetching data`);
        const data = await fetchUserData();
        console.log("data fetched successfully");
        
        console.log(data);
        
    } catch (error) {
        console.log("Unexpected Error Occured");
        
    }
}

getData();