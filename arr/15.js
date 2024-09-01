
const marvel = ["captain", "ironman", "spiderman"];
const dc = ["superman", "batman", "flash"];

// Pushing the dc array into marvel
//marvel.push(dc);

//console.log(marvel);
//concatination
// const all=marvel.concat(dc);
// console.log(all);
//spread mehod
// const allhearose=[...marvel, ...dc];
// console.log(allhearose);

// const another_array=[1,3,[1,45],4,[32,[3,4]]];
// console.log(another_array);
// const real_another_array=another_array.flat(Infinity);
// console.log(real_another_array)

//converting a text to array
// console.log(Array.isArray("shrijth"));
// console.log(Array.from("shrijth"));
// console.log(Array.from({name:"shrijth"}));  //it can't turn it into a array

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));