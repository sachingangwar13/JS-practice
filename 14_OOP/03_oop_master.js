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

class Car extends Vehicle {
    
    drive(){
        return `you are driving ${this.model}`
    }
}

let myCar = new Car("TATA" ,"NANO.");


console.log(myCar.start());
console.log(myCar.warning());
console.log(myCar.drive());