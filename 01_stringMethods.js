

let str = "sachin gangwar" ;
let str1 = new String("sachin gangwar") ; // creates string object not primitive string

    // 1. searching methods

            // indexOf() : returns the index of first occurence of the substring in the string
            console.log(str.indexOf("g")) ; // 7

            // lastIndexOf() : returns the index of last occurence of the substring in the string
            console.log(str.lastIndexOf("a")) ; // 12

            // search() : seach for a pattern using regular expression ans returns the index of first occurence
            console.log(str.search(/gan/)) ; // 7

            // stratsWith() : checks if the string starts with the given substring
            console.log(str.startsWith("sac")) ; // true

            // endsWith() : checks if the string ends with the given substring
            console.log(str.endsWith("war")) ; // true

            //includes() : checks if the string contains the given substring
            console.log(str.includes("gang")) ; // true

    // 2. string manipulation methods

            // slice() : extracts a part of the string and returns it as a new string
            console.log(str.slice(0,6)) ; // sachin
            console.log(str.slice(-7)) ; // gangwar
            console.log(str.slice(-5,-2)) ; // ngw

            // substring(start,end) : extracts a part of the string and returns it as a new string
            console.log(str.substring(0,6)) ; // sachin
            // not support neagtive indexing

            // substr(start,length) : extracts a part of the string and returns it as a new string
            console.log(str.substr(0,6)) ; // sachin

            // replace() : replaces a substring with another substring
            console.log(str.replace("gangwar","kurmi")) ; // sachin kurmi

            // toUpperCase() : converts the string to uppercase
            console.log(str.toUpperCase()) ; // SACHIN GANGWAR

            // toLowerCase() : converts the string to lowercase
            console.log(str.toLowerCase()) ; // sachin gangwar

            // concat() : joins two or more strings and returns a new string
            console.log(str.concat(" is a good boy")) ;

            // trim() : removes whitespace from both ends of a string
            console.log(str.trim()) ; // sachin gangwar
            console.log(str.trimStart()) ; // sachin gangwar
            console.log(str.trimEnd()) ; // sachin gangwar
            

    // 3. extracting string characters

            // charAt() : returns the character at a specified index
            console.log(str.charAt(0)) ; // s

            // charCodeAt() : returns the unicode of the character at a specified index
            console.log(str.charCodeAt(0)) ; // 115

            // property access
            console.log(str[0]) ; // s

    // 4. converting string to array

            // split() : splits a string into an array of substrings
            console.log(str.split(" ")) ; // [ 'sachin', 'gangwar' ]

    // 5. string properties

            // length : returns the length of the string
            console.log(str.length) ; // 14

    // 6. string template literals
    
            // template literals : allows embedded expressions
            console.log(`my name is ${str}`) ; // my name is sachin gangwar

    // 7. string iteration

            // for loop
            for(let i = 0 ; i < str.length ; i++){
                console.log(str[i]) ;
            }

            // for of loop

            for(let char of str){
                console.log(char) ;
            }

            // forEach loop
            str.split("").forEach((char) => {
                console.log(char) ;
            }) ;

            // map loop
            str.split("").map((char) => {
                console.log(char) ;
            }) ;

            // filter loop
            str.split("").filter((char) => {
                console.log(char) ;
            }) ;

            // reduce loop
            str.split("").reduce((acc,char) => {
                console.log(char) ;
            }) ;

            // reduceRight loop
            str.split("").reduceRight((acc,char) => {
                console.log(char) ;
            }) ;

            // some loop
            str.split("").some((char) => {
                console.log(char) ;
            }) ;

            // every loop
            str.split("").every((char) => {
                console.log(char) ;
            }) ;

            // find loop
            str.split("").find((char) => {
                console.log(char) ;
            }) ;

            // findIndex loop
            str.split("").findIndex((char) => {
                console.log(char) ;
            }) ;

        
        // 8. string comparison
            
            // localeCompare() : compares two strings in the current locale
            console.log(str.localeCompare(str1)) ; // 0

        
        

        
        






