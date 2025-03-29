// function greet(){
//     console.log("hello world!");
    
// }

setTimeout(() => {                    // executed 3rd
    console.log("2. hello world!");
    
} ,4000);

setTimeout(() => {                    // executed 2nd
    console.log("1. Hello World!")
}, 2000);

for(let i=0 ; i<5 ; i++){             // executed first
    console.log("formlaity");
}