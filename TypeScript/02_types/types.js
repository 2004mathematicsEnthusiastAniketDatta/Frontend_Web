"use strict";
"use noImplicitAny";
Object.defineProperty(exports, "__esModule", { value: true });
let num = 5;
console.log(num); // 5
let userId = 334455.3;
userId.toPrecision(2); // 3.3e+5
let isLoggedIn = true;
isLoggedIn.valueOf(); // true
let greeting = "Hello World!";
greeting.toLowerCase();
console.log(greeting);
// let hero; //hero: any
let hero;
function getHero() {
    return "Batman";
}
hero = getHero();
console.log(hero);
