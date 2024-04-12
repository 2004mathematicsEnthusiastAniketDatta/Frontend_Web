//Higher order functions:  A higher order function is a function that takes one or more functions as arguments, or returns a function as its result.
"use strict";

function salary(num){
    return num*.7
}
setTimeout(salary,300)

const mySalaries=[20,30,40,20,300,400];
mySalaries.filter(n => n > 50)