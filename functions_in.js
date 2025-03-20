// declaration

function userLoginMessage(name){
    return `${name} just logged in.`;
}

console.log(userLoginMessage("sachin"));

/*
    rest operator => is used to collect the remaining elements of an array or object into a separate variable. 
    It is commonly used in function parameters , object destructuring.
    e.g.
*/ 

    function findSum(...num){

        // console.log(num);   =>  [ 1, 2, 3, 4, 5, 6 ]
        let sum = 0;

        for(let i = 0 ; i<num.length ; i++){
            sum += num[i];
        }

       return sum;
    }

    let sum =  findSum(1,2,3,4,5,6);
    console.log(`sum is ${sum}`);


    // * rest operator in array destructuring

            const numbers = [10, 20, 30, 40, 50];

            const [first, second, ...rest] = numbers;
            
            console.log(first);  // 10
            console.log(second); // 20
            console.log(rest);   // [30, 40, 50]



    // Rest Operator in Object Destructuring

            const user = {
                name: "Alice", 
                age: 25, 
                country: "USA", 
                job: "Developer" 
            };

            const { name, age, ...otherInfo } = user;
            
            console.log(name);      // "Alice"
            console.log(age);       // 25
            console.log(otherInfo); // { country: "USA", job: "Developer" }

// functions with objects

            const users = {
                name: "sachin",
                age:22
            }

            function objectInfo(anyObject){
                console.log(`name is ${anyObject.name} , age is ${anyObject.age}`);
            }

            objectInfo(users);


// mini hoisting

            console.log(add1(5))  // gives no error. O/P : 6
            function add1(num){
                return ++num;
            }

            console.log(add2(9)); // gives error -  Cannot access 'add2' before initialization
            
            const add2 = function(num){
                return num+2;
            }
            // console.log(add2(9));
    
    
    