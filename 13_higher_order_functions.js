/**
        Higher Order Functions - those functions which 
                        - takes another function as an argument 
                        - or returns another function is K/A HOF.
 */


function multiply(multiplier){

    return function performMultiplication(number){
        return multiplier * number
    };
};

let ans = multiply(5);

console.log(ans(2));

