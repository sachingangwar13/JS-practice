// prototype - prototype is a built-in mechanism that allows objects to inherit properties and methods from other objects.
let computer = {
    cpu : 12 
};

let lenovo = {
    screen : "fhd",
    __proto__ : computer,
}

console.log(lenovo.__proto__);     // { cpu: 12 }

// better way to do so

        let car = {
            tyres: 4,
            seats : 7 ,
        };

        let tesla = {
            driver : 'AI'
        }

        Object.setPrototypeOf(tesla,car);    // this will inherit properties of car to tesla
        console.log(Object.getPrototypeOf(tesla));      // { tyres: 4, seats: 7 }

// hasOwnProperty() => return a boolean tells whether this object has specified property or not.

            console.log(tesla.hasOwnProperty("driver"))  // true
            console.log(tesla.hasOwnProperty("tyres"))   // false
