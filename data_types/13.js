//js date is started on 1 jan 1970
let mydate=new Date();
// console.log(mydate);
// console.log(mydate.toDateString());         //
// console.log(mydate.toString());
// console.log(mydate.toLocaleString());
// console.log(typeof mydate);

//let newdate=new Date(2024,1,23);      // if we put 31 in the month that doesn't contain 31 date then it will show it's next moth
//let nedate=new Date(2024,1,23,4,1);   //2/23/2024, 4:01:00 AM
// let nedate=new Date("22-12-2024");        //indain standard time is not allowed     output: "Invalid Date"
// //console.log(nedate.toLocaleString());   

// let myday=Date.now();       //1725127034532 milli second
// console.log(myday);     // 1725127269348
    
// console.log(nedate.getTime());       //NaN
// console.log(Math.floor(Date.now()/1000));       //current time in second : 1725127269

let date = new Date();

console.log(date);              //2024-08-31T18:04:51.336Z
console.log(date.getMonth()+1);   //7
console.log(date.getDay());     //6
