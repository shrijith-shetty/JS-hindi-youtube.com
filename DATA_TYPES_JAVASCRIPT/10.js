let num1=123;
let num2=num1;
num2=321;
console.log(num1);  //if we change the value of num1 then 
console.log(num2);  //it will not affect to the num2 becuase it is placed in stack

const myobj = {
    name:"asdf",
    age:10,
    class:"b",

};
const myobj1=myobj;
myobj1.name="fdas";
console.log(myobj)
console.log(myobj1)