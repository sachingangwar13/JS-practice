// this keyword

        const user = {
            username: "sachin",

            welcome: function(){
                console.log(`Welcome to website, ${this.username}`);
                
            }
        }

        user.welcome()
        user.username = "sam"
        user.welcome()

// we can't use this keyword inside functions

        function fun(){
            const username = "sachin"
            console.log(`hey ${this.username}`);  // O/P : hey undefined
            
        }

        fun()

// arrow functions =>

        const func = function(){
            const name = "sachin"
            console.log(`${this.name} , this is a function`);
        }

        // arrow function
        const funct = () => {
            const name = "sachin"
            console.log(`${this.name},this is also a function`);
        }

        func();
        funct();

        // implicit return => no need to mention return it automatically returns code under paranthesis

            const sum2 = (num1,num2) => ( num1 + num2);
            console.log(sum2(5,7));  // 12

            
            const returnObject = () => ({name :"sachin"})
            console.log(returnObject());  // { name: 'sachin' }
        
