//can store diffrent types of data types

//const arr=[1,2,4,2,3];
//console.log(arr);

// const arr1 = new Array(1,5,3,2);

// //console.log(arr1);

// console.log(arr.push(9)); // don't write like this insdtead of 
// arr.push(5);
// //console.log(arr);       // this is the correct method
// arr.pop(4);
// //console.log(arr);       // is will pop the last element

// arr.unshift(5);         // it will add the element to begin
// //console.log(arr);
// arr.shift();
// arr.shift();            //it will pop the first elelment of the node
// //console.log(arr);

//console.log(arr.includes(5));       // check whether 5 is present or not in the given array

//console.log(arr.indexOf(6));        //to check the index of the value if it not there then it will return "-1"


//const newarr=arr.join();                // it will convert the orginal array into string();

//console.log(newarr);                
//console.log(typeof newarr);

//slice and splice
const arr=[1,2,3,4,5,6];
console.log("A ",arr);
const narr=arr.slice(1,3);      //slice will show the value from given idnex to end index where splice will delete value of given the start to end index 
console.log(narr);
console.log("B ",arr);
const narr1=arr.slice(1,3);
console.log(narr1);
console.log("C ",arr);
const narr2=arr.splice(1,3);
console.log("C ",arr);
console.log(narr2);