const user = {
    fname : "sachin",
    lName : "gangwar",
    mail : "sachin@google.com",
    age : 22
};


console.log(user.fname);

// object destructuring - convenient way to extract values from an object and assign them to variables in a concise manner

    const {fname , lName , mail , age} = user;

    console.log(fname);
    console.log(lName);
    console.log(mail);
    console.log(age);

// we can also use different variable names =>

    const {fname : fullName , lName : lastName , mail : e_Mail } = user;

    console.log(fullName +" " + lName +" " + mail);
    
