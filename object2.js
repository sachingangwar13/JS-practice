const user = {

    fullname : {
        
        userName : {
            firstName: "sachin",
            lastName : "gangwar",
        }
    },

    email : "sachin@123",
    age : 22,
    phoneNo : "83xxxxxxx", 
}

console.log(user.fullname.userName.firstName);
console.log(user.fullname.userName.lastName);

// combining 2 objects 

    const obj1 = {
        1 : "a",
        2 : "b"
    } 

    const obj2 = {
        3 : 'c',
        4 : 'd',
    }

    // const obj3 = {obj1,obj2};

    // Object.assign(target , object1 , obj2) => stores value of all object in target object , so it is optimal to use empty {} in place of target

    // const obj3 = Object.assign({},obj1 , obj2);    
    const obj3 = Object.assign(obj1 , obj2,user);    
    console.log(obj3);
    console.log(obj1);

console.log(Object.keys(user)); // return an array containing all keys of object
console.log(Object.values(user)); //return an array containing all values of object



    