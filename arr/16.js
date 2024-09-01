//objects
const mysyb=Symbol("key1");

const JSuser = {
    name: "hithesh",
    "full-name":"hithesh choudary",
    [mysyb]:"mykey1",
    age:29,
    location:"Jaipur",
    email:"hithesh@gmail.com",
}

// console.log(JSuser.name);  
// console.log(JSuser["name"]);   
// console.log(JSuser["age"]);
// console.log(JSuser[mysyb]);     //is we put square bracket while defining an object then no need to put double quote else we should and how to access symbol

// to keep a object value to constant we should use key word freez;
Object.freeze(JSuser);
JSuser.email="choudary@gmail.com";
//console.log(JSuser["email"]);       //  output: hithesh@gmail.com   // and it don't show error

JSuser.greeting=function(){
    console.log("hello world");
}
JSuser.greetingtwo=function(){
    console.log(`hello ${this.name}`);
}

console.log(JSuser.greeting());
console.log(JSuser.greetingtwo());
