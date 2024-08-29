const name="shrijth";
const game = "football";
// console.log(name + game + "hi"); // Commented out as per your request
console.log(`Hello, my name is ${name} and my favourite sport is ${game}`);

const gamename = new String('strong');
//console.log(gamename[0]); // 's'
//console.log(gamename.__proto__); // Accesses the prototype of the String object
//console.log(gamename.length); // 6
//console.log(gamename.toLowerCase()); // 'strong'
//console.log(gamename.toUpperCase()); // 'STRONG'

//console.log(gamename.charAt(3));
//console.log(gamename.indexOf("n"));

const newname=gamename.substring(0,4);
//console.log(newname);

const newsub=gamename.slice(-8,3);
//console.log(newsub);

const newstring = "         hithesh     ";
console.log(newstring);
console.log(newstring.trim());      // removing whitespace using .trim() function 


const url="http://hithesh.com/hithsh%20choudary";

console.log(url.replace('%20','$'))

console.log(url.includes('sundar'));        // to check the given word is present or not 

console.log(url.split('/'));