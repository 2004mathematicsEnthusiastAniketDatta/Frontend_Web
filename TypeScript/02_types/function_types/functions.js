"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addsum(num) {
    return num + 2;
}
addsum(5);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper('hello');
// TypeScript also supports type inference, which means that you don't have to explicitly define the type of the parameter or return value. TypeScript will automatically infer the type based on the value you pass to the function.
function signUpUser(username, email, password, ispaid) {
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password :', password);
    console.log('Is Paid:', ispaid);
}
;
signUpUser('john', 'john@gmail.com', '123456', true);
//Arrow functions
var add = function (a, b) { return a + b; };
console.log(add(7, 8));
var multiply;
multiply = function (a, b) { return a * b; };
console.log(multiply(7, 8));
var myVal;
// functiom getValue(myVal:number){
//   if (myVal > 5){
//     return 404;
//   } 
//   return 200 ; 
// };
var getHello = function (s) {
    return "";
};
var heroes = ["thor", "spiderman", "ironman", "captain america"];
heroes.map(function (hero) { return console.log("Hero Name: ".concat(hero)); });
function consoleError(errmsg) {
    console.error("This is an error message ".concat(errmsg));
}
consoleError("404 Not Found");
function fail(msg) {
    throw new Error(msg);
}
fail("Something went wrong");
