function fetchData(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let success = true

            if(success){
                resolve("data fetched successfully.")
            }else{
                reject("Error Fetching data")
            }
        },3000);
    });
}

fetchData()
        .then((result) => console.log(result))
        .catch((error) => console.log(error))