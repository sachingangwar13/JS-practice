// 1. for of loop

        const arr = [1,2,3,4,5,6];
        
        for (const num of arr) {
            console.log(num);
        }

// 2. Maps in js

        const map = new Map();

        map.set('a',0);
        map.set('b',1);
        map.set('c',2);
        map.set('d',3);

        console.log(map);

        // for (const ev of map) {
        //     console.log(ev[0] + " "+ ev[1]);
            
        // }

        for (const [key ,value] of map) {
            console.log(key , ":-" ,value);
        }
    

// 3. For in 

        const obj = {
            cpp : "C++",
            js : "javaScript",
            py : "python"
        };

        for (const key in obj) {
            if (key){
                console.log(key +" "+ obj[key]);
            }
        }

        // iterating arrays:

            let a = [1,2,3,4,5,6,7];

            for(let key in a){
                console.log(`element is ${a[key]}`);
            }

// 4. For each loop => method is used to iterate over elements in an array and execute a function for each element.

        
        let arrr = [1,2,3,4,5,6];

        arrr.forEach( function (items){
            console.log(items);
        } )

        arrr.forEach( (num) => {
            console.log(num);
            
        } )


        arrr.forEach( (item , index , arrr) => {
            console.log(`item of ${item} is ${index} in array ${arrr}`);
        })


// 5. filter() =>  method creates a new array with elements that pass a specific condition.


        let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        // let newArray = array.filter( (num) => num > 4);      // stores number greater than 4 in newArray
        let newArray = array.filter( (num) => {
            return num > 4
        });             
        
        // stores number greater than 4 in newArray
        console.log(newArray);

        let evenNums = array.filter( (num) => num % 2 == 0 );
        console.log(evenNums);


// 6. map() => The map() method creates a new array by applying a function to each element of an existing array.


        let newNums = array.map( (num) => num + 10 );
        console.log(newNums4);

// 7. Chaining

        const numbers = [1, 2, 3, 4, 5, 6];

        const doubledEvens = numbers
                            .filter(num => num % 2 === 0)       // Keep only even numbers
                            .map(num => num * 2);               // Double them

        console.log(doubledEvens);
        
        
