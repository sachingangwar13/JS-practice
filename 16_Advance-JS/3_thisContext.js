const person = {
    name : "sachin",

    greet (name){

        console.log(`hello , ${this.name}`);
    }
}

person.greet();            // hello , sachin

const greetFunction = person.greet;
greetFunction();           // hello , undefined

/*
    greetFunction() is not having context of person object.
    to get context of person object we have to use bind method.
*/

const boundGreet = person.greet.bind({name : "sam"})
boundGreet()                // hello , sam