"use strict"; //treat all JS code as newer version
// alert(3+3)  works in Browser console , Node.js has a different way of working  with alert(){....}
// console.log(3+3);console.log(" bad readability") low code readability
//https://tc39.es/ecma262/#sec-intro  : official website for ECMASCRIPT STANDARDS
//MDN documentations
let name="Aniket";//string '',"",none
let age = 18;   // range of number : 2^53
let isLoggedIn = false; //boolean
let contact=9836283226; // bigint contact=9836283226
let state="null";//null -> standalone value
let hoistbefore=undefined;//undefined=> value  of a variable before value(s) are stored in the variable
typeof(Symbol);//symbol => unique
console.table([name,age,isLoggedIn,contact,state,hoistbefore,typeof(Symbol)])
console.log(typeof(None)); //undefined
console.log(typeof(null)) //object
console.log(typeof(undefined)) //undefined
console.log(typeof(NaN)) //number

let score=33
typeof(score)
console.log(typeof score);
let valueInNumber =Number(score);
console.log(valueInNumber); //NaN if the value is Not a Number 
console.log(typeof valueInNumber); 
console.log(Number(null)); //0
console.log(Number(undefined)); //NaN : Number and stands for Not A Number 
console.log(Number(true)); //1
console.log(Number(false)); //0
String(score)
console.log(String(score));
console.log(typeof String(score)); //string
let scoreString=String(0)
console.log(scoreString) // "0"
console.log(BigInt(9836283226)) // 9836283226n
let a=123456n 
console.log(typeof a) //bigint
let isLogged=56 //number
let booleanIsLoggedIn=Boolean(isLogged) // if truthy value then true else false
console.log(booleanIsLoggedIn); // true
let FalsyValue =0 
console.log(Boolean(FalsyValue)) //false
console.log(Boolean(null)) //false
console.log(Boolean(undefined)) //false
console.log(Boolean(NaN)) //false
//null , undefined , NaN  when converted to boolean  gives false

console.log(Boolean("Javascript")) //true
console.log(Boolean("")) //false
//empty string in javascript
let str=null
console.log(String(str))

//Concept of Infinity in Javascript
 let b= Infinity
 console.log(b) //Infinity
 console.log(typeof b); //number
 console.log(Number (b)); //Infinity
 console.log(1/Infinity); //0
 console.log(-Infinity); //-Infinity
 console.log(1/(-Infinity));//-0 (IEE754 standards)
 console.log(String(-Infinity));//"-Infinity"
 console.log(Boolean(-Infinity));//true
 console.log(Boolean(Infinity));//true

 /*1=>true; 0+>false
  ""=false
  "Hello"=true */

  let someNumber = 33
  let stringNumber = String(someNumber)
  console.log(typeof stringNumber) //string
  

