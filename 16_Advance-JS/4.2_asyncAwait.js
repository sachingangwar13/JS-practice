            // promise.all 
            
function fetchUserData1(){
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve("DATA 1");
        } , 3000)
    })
}

function fetchUserData2(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("DATA 2");
        } , 2000)
    })
}

async function getData(){

    try {
        // const data1 = await fetchUserData1();
        // const data2 = await fetchUserData2();

        const [data1 , data2] = await Promise.all([fetchUserData1() , fetchUserData2()]) // takes an array containing promises

        console.log("fetched successful");
        console.log(data1);
        console.log(data2);
        
        
    } catch (error) {
        console.log("Unexpected Error Occured");
    }
}

getData();