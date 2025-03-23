function makeTea(type){
    this.type = type
    this.serve = function(){
        return `your ${this.type} tea is ready.`;
    };
}

let masalaTea = new makeTea("masala");
console.log(masalaTea.serve());


// we can also add any property to function using .prototype

        makeTea.prototype.bill = function(){
            return `Sir your bill of ${this.type} tea is ready.`;
        }

        let tandooriChai = new makeTea("tandoori");
        // console.log(tandooriChai.serve());

        console.log(tandooriChai.bill());

console.log(masalaTea.bill());