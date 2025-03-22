/*
    1. Write a 'for' loop that loops through the array -
       ["green tea" , "black tea" , "chai" ,"long tea"] and
       stops the loo[ when it finds "chai".

       store all teas before "chai" in a new array name 'selectedTeas'.
*/

    const teas = ["green tea" , "black tea" , "chai" ,"long tea"];
    const selectedTeas = [];
    let idx;

    for(let i=0 ; i<teas.length ; i++){

        if(teas[i] === "chai"){
            idx=i;
            break;
        }
    }

    for(let i=0 ; i<idx ; i++){
        selectedTeas.push(teas[i]);
    }

    console.log(selectedTeas);