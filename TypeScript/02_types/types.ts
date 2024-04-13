"use noImplicitAny";
let num: number = 5;
console.log(num); // 5

let userId: number = 334455.3;
userId.toPrecision(2); // 3.3e+5

let isLoggedIn : boolean = true;
isLoggedIn.valueOf(); // true

let greeting: string = "Hello World!";
greeting.toLowerCase();
console.log(greeting);


// let hero; //hero: any
let hero: string;
function getHero() {
  return  "Batman";
}
hero= getHero();
console.log(hero);

export{}

