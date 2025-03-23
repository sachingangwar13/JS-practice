// 1. Class declaration 
        class Vehicle {
            constructor(company, model) {
                this.company = company;
                this.model = model;
            }

            start(){
                return `${this.company} ${this.model} has just started.`;
            }

            warning(){
                return `drive ${this.model} carefully.`;
            }
        }

// 2. Inheritance
        class Car extends Vehicle {
            
            drive(){
                return `you are driving ${this.model}`
            }
        }

        let myCar = new Car("TATA" ,"NANO.");


        // console.log(myCar.start());
        // console.log(myCar.warning());
        // console.log(myCar.drive());

// 3. Encapsulation

            class BankAccount {
                #balance = 0        // private variable

                depositMoney(amount){
                    this.#balance += amount;
                    return `new balance is $ ${this.#balance}`;
                }

                withDraw(amount){
                    if(this.#balance >= amount){
                        this.#balance -= amount;
                        return `new balance is $ ${this.#balance}`;
                    }else{
                        return "insufficient balance";
                    }
                }
            }

            let myAccount = new BankAccount();

            // console.log(myAccount.depositMoney(1000));
            // console.log(myAccount.withDraw(500));

// 5. getters and setters

            class Employee{
                #salary;
                constructor(name , salary){
                    this.name = name;
                    this.#salary = salary;
                }

                get salary(){
                    return `Salaray is $${this.#salary}`;
                }

                set salary(salary){
                    this.#salary = salary;
                }
            }

            let emp = new Employee("sachin",500);

            emp.salary = 6000;
            console.log(emp.salary);
            
            
            
            