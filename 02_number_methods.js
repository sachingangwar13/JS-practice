
// let num = 400;

const num = new Number(100);


    // 1. Mathematical Methods

            // round() : returns the value of a number rounded to the nearest integer
            console.log(Math.round(num)) ; // 100

            // ceil() : returns the value of a number rounded up to the nearest integer
            console.log(Math.ceil(num)) ; // 100

            // floor() : returns the value of a number rounded down to the nearest integer
            console.log(Math.floor(num)) ; // 100

            // trunc() : returns the integer part of a number
            console.log(Math.trunc(num)) ; // 100

            // abs() : returns the absolute value of a number
            console.log(Math.abs(-num)) ; // 100

            // sqrt() : returns the square root of a number
            console.log(Math.sqrt(num)) ; // 10

            // cbrt() : returns the cube root of a number
            console.log(Math.cbrt(num)) ; // 4.641588833612778
            console.log(Math.cbrt(num).toFixed(2)) ; // 4.64

            // max() : returns the number with the highest value
            console.log(Math.max(100,200,300,400)) ; // 400

            // min() : returns the number with the lowest value
            console.log(Math.min(100,200,300,400)) ; // 100

            // pow() : returns the value of a number raised to the power of another number
            console.log(Math.pow(num,2)) ; // 10000

            // random() : returns a random number between 0 and 1
            console.log(Math.random()) ; // 0.1234567891011

            // to fixed() : returns a string, with the number written with a specified number of decimals
            console.log(num.toFixed(2)) ; // 100.00

            // to precision() : returns a string, with a number written with a specified length
            console.log(num.toPrecision(2)) ; // 1e+2
            

    // 2. Number Properties

            // MAX_VALUE : returns the largest number possible in JavaScript
            console.log(Number.MAX_VALUE) ; // 1.7976931348623157e+308

            // MIN_VALUE : returns the smallest number possible in JavaScript
            console.log(Number.MIN_VALUE) ; // 5e-324

            // POSITIVE_INFINITY : represents infinity (returned on overflow)
            console.log(Number.POSITIVE_INFINITY) ; // Infinity

            // NEGATIVE_INFINITY : represents negative infinity (returned on overflow)
            console.log(Number.NEGATIVE_INFINITY) ; // -Infinity

            // NaN : represents a "Not-a-Number" value
            console.log(Number.NaN) ; // NaN

            // EPSILON : represents the difference between 1 and the smallest floating point number greater than 1
            console.log(Number.EPSILON) ; // 2.220446049250313e-16

            // MAX_SAFE_INTEGER : represents the maximum safe integer in JavaScript
            console.log(Number.MAX_SAFE_INTEGER) ; // 9007199254740991

            // MIN_SAFE_INTEGER : represents the minimum safe integer in JavaScript
            console.log(Number.MIN_SAFE_INTEGER) ; // -9007199254740991

    // 3. Number Methods

            // toString() : returns a number as a string
            console.log(num.toString()) ; // 100

            // toPrecision() : returns a string, with a number written with a specified length
            console.log(num.toPrecision(2)) ; // 1e+2

            // valueOf() : returns a number as a number
            console.log(num.valueOf()) ; // 100

            // isFinite() : returns true if the number is a finite number, otherwise false
            console.log(Number.isFinite(100)) ; // true

            // isInteger() : returns true if the number is an integer, otherwise false
            console.log(Number.isInteger(100)) ; // true

            // isNaN() : returns true if the value is NaN, otherwise false
            console.log(Number.isNaN(100)) ; // false

            // isSafeInteger() : returns true if the number is a safe integer, otherwise false
            console.log(Number.isSafeInteger(100)) ; // true

            // parseFloat() : parses a string and returns a floating point number
            console.log(Number.parseFloat("100.5")) ; // 100.5

            // parseInt() : parses a string and returns an integer
            console.log(Number.parseInt("100.5")) ; // 100