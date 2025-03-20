// Immediately invoked Function Expression (IIFE)
/*
    is a function that runs immediately after it is defined. 
    It is often used to create a private scope and avoid polluting the global namespace.

*/
    // semicolon must be used to stop the function

        (function() {
            console.log("This is an IIFE");
        })();


        (() => {
            console.log("Arrow function IIFE");
        })();

        
        // pass parameters
        ( (name) => {
            console.log(`hey, ${name}`);
            
        })('sachin');