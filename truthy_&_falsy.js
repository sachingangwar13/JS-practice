/*
     falsy values :-

        A falsy value is considered false when used in a boolean context. 
        There are exactly 8 falsy values in JavaScript:

            1. false
            2. 0 (zero)
            3. -0 (negative zero)
            4. "" (empty string)
            5. null
            6. undefined
            7. NaN (Not-a-Number)
            8. BigInt 0n

    Truthy values -
            []
            {}
            " "
            "0"
            '0
            'hii'
            "false"
            function(){}

*/

if([]){
    console.log("hii");
}

if(" "){
    console.log("not falsy");
}

/* Nullish Coalescing Operator (??) in JavaScript

        // is used to provide a default value when the left-hand side is null or undefined.

        let result = value1 ?? value2;

        If value1 is not null or undefined, result is value1.
        If value1 is null or undefined, result is value2.

*/

console.log(null ?? 5);   // 5

console.log(undefined ?? 10 ?? null);   // 10
