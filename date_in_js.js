// Get the current date and time
const now = new Date();
console.log("Current Date and Time: ", now);

// Get the current year
const year = now.getFullYear();
console.log("Year: ", year);

// Get the current month (0-11, where 0 is January and 11 is December)
const month = now.getMonth() + 1; // Adding 1 to get the correct month number
console.log("Month: ", month);

// Get the current date
const date = now.getDate();
console.log("Date: ", date);

// Get the current day of the week (0-6, where 0 is Sunday and 6 is Saturday)
const day = now.getDay();
console.log("Day of the Week: ", day);

// Get the current hours
const hours = now.getHours();
console.log("Hours: ", hours);

// Get the current minutes
const minutes = now.getMinutes();
console.log("Minutes: ", minutes);

// Get the current seconds
const seconds = now.getSeconds();
console.log("Seconds: ", seconds);

// Get the current milliseconds
const milliseconds = now.getMilliseconds();
console.log("Milliseconds: ", milliseconds);

// Format the date as a string
const formattedDate = now.toDateString();
console.log("Formatted Date: ", formattedDate);

// Format the time as a string
const formattedTime = now.toTimeString();
console.log("Formatted Time: ", formattedTime);