
let sym = Symbol("s1"); // symbol declaration

// object - collection of key value pairs 
let user = {
    name: "sachin",
    age : 22,
    address : "bly",
    [sym] : "symbol1", // symbol declaration in objects
    email : "sachin@gmail.com",
    isLoggedIn : false,
};

// accessing object properties
console.log(user.name);
console.log(user["name"]);
console.log(user[sym])

// add new key - value pair
user.city = "blr";
console.log(user.city); // blr

// delete property
delete user.city;
console.log(user.city); // undefined

// freeze the object - no changes will bw considered
        Object.freeze(user);

        // trying to modify the frozen object
        user.age = 25;
        console.log(user.age); // 22

        // trying to add a new property to the frozen object
        user.country = "India";
        console.log(user.country); // undefined

        // trying to delete a property from the frozen object
        delete user.email;
        console.log(user.email); // sachin@gmail.com

console.log(user);
