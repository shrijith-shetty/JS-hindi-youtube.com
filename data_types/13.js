let mydate = new Date();
console.log(mydate); // Output: Current date and time in ISO format, e.g., "2024-08-31T18:04:51.336Z"

console.log(mydate.toDateString()); // Output: Current date in a human-readable format, e.g., "Sat Aug 31 2024"

console.log(mydate.toString()); // Output: Complete date and time string, e.g., "Sat Aug 31 2024 18:04:51 GMT+0000 (Coordinated Universal Time)"

console.log(mydate.toLocaleString()); // Output: Current date and time in a locale-sensitive format, e.g., "8/31/2024, 6:04:51 PM"

console.log(typeof mydate); // Output: "object" (since `mydate` is a Date object)

// Creating a new Date object for February 23, 2024, at 4:01 AM
let newdate = new Date(2024, 1, 23); // Note: JavaScript months are 0-indexed (0 for January)
console.log(newdate.toLocaleString()); // Output: "2/23/2024, 12:00:00 AM"

// Creating a new Date object for February 23, 2024, at 4:01 AM
let nedate = new Date(2024, 1, 23, 4, 1);
console.log(nedate.toLocaleString()); // Output: "2/23/2024, 4:01:00 AM"

// Creating a new Date object using an invalid date format
let nedateInvalid = new Date("22-12-2024"); // Invalid format, should use "YYYY-MM-DD" or "MM/DD/YYYY"
console.log(nedateInvalid.toLocaleString()); // Output: "Invalid Date"

// Get the current timestamp in milliseconds since January 1, 1970
let myday = Date.now();
console.log(myday); // Output: A large integer representing milliseconds, e.g., "1725127269348"

// Get the timestamp of the 'nedateInvalid' object (which is invalid)
console.log(nedateInvalid.getTime()); // Output: NaN (since the date is invalid)

// Get the current time in seconds since January 1, 1970
console.log(Math.floor(Date.now() / 1000)); // Output: A large integer representing seconds, e.g., "1725127269"

// Current Date, Month, and Day
let date = new Date();

console.log(date); // Output: Current date and time in ISO format, e.g., "2024-08-31T18:04:51.336Z"

console.log(date.getMonth() + 1); // Output: 9 (as months are 0-indexed in JavaScript, so August (8) + 1 = September (9))

console.log(date.getDay()); // Output: 6 (Saturday, as `0` is Sunday)
