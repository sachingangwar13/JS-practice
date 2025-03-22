let arr = [1,2,3,4,5];

let tempArray = arr;
tempArray[0] = 100;
console.log(arr[0]);  // 100   

/*
  Explanation: This is because arrays are reference types in JavaScript. 
    When we assign an array to a variable, we are actually assigning a reference to the array in memory, 
    not the actual array itself. So, when we modify the array through one variable,
    the changes are reflected in all variables that reference the same array.
*/


    // 1. Declaration

            // 1.1. Using an Array Literal
            const arr1 = [1, 2, 3];
            console.log(arr1); 

            // 1.2. Using the Array Constructor
            const arr2 = new Array(1, 2, 3, 4, 5);
            console.log(arr2); 


    // 2. Array Methods

            arr1.push(4);       // Adds an element to the end of the array
            arr.pop();          // Removes the last element from the array
            arr.length;
            arr1.shift();       // Removes the first element from the array
            arr1.unshift(0);   // Adds an element to the beginning of the array
            console.log(arr1);

    // 3. Other Methods

            let tempArr = arr1.join();  // Converts the array elements to a string
            // let tempArr = arr1.join('-');  // Converts the array elements to a string
            console.log(tempArr);
            
            let tempArr2 = tempArr.split(',');  // Converts a string to an array
            console.log(tempArr2);

            let tempArr3 = arr1.slice(1, 3);  // Extracts a section of the array
            console.log(tempArr3);

            let tempArr4 = arr1.concat(arr2);  // Concatenates two arrays
            console.log(tempArr4);

            let tempArr5 = arr1.reverse();  // Reverses the array   
            console.log(tempArr5);

            let tempArr6 = arr1.sort();  // Sorts the array
            console.log(tempArr6);

    // 4. slice and splice

            let original = [0,1,2,3,4,5,6];

            let b = original.slice(1,3);  // Extracts elements from index 1 to 2

            console.log(b);         // [1,2]
            console.log(original);         // [0,1,2,3,4,5,6]

            let c = original.splice(2,5);  // Removes elements from index 2 to 4
            console.log(c);         // [2,3,4,5,6]
            console.log(original);         // [0,1]

            /*
                * slice does not modify the original array, 
                  but returns a new array with the extracted elements. 

                * splice, on the other hand, modifies the original array 
                 by removing the specified elements.

                            slice(startIndex, endIndex)
                * slice doesnot include the end index element
                * splice includes the end index element
                
            */

    // 5. push and concat

            let marvel = ["ironman", "thor", "captain america"];
            let dc = ["batman", "superman"];

            marvel.push(dc);
            console.log(marvel);    // [ 'ironman', 'thor', 'captain america', [ 'batman', 'superman' ] ]     
                                    // inserts dc array as one element in original marvel array

        //     let heroes = marvel.concat(dc);
        //     console.log(heroes);             // [ 'ironman', 'thor', 'captain america', 'batman', 'superman' ]  
                                                // return new array which have combined elements of both arrays.


            // spread operator
            let heroes = [...marvel , ...dc];
            console.log(heroes);


            
            

              



            
    
