//Prototypal_Inheritence
//Prototypal Inheritence is a way to create objects that inherit from other objects. This is done by using the prototype property of the constructor function. When a new object is created using the constructor function, the prototype property of the constructor function is assigned to the prototype property of the new object. This allows the new object to inherit properties and methods from the constructor function.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
"use strict";
function makeHuman(name, age){
    this.name = name;
    this.age = age;
    // this.printMyName =()=>{
    //     console.log(this.name);
    // }
    // this.printMyName();
}
makeHuman.prototype.printMyName = function(){
    console.log(this.name);
};

const human1 = new makeHuman("Harsh", 25);
const human2 = new makeHuman("Raj", 30);
console.log(human1,human2);
// Output: makeHuman { name: 'Harsh', age: 25 } makeHuman { name: 'Raj', age: 30 }

//constructor functions are required to create objects in JavaScript. When a new object is created using a constructor function, the prototype property of the constructor function is assigned to the prototype property of the new object. This allows the new object to inherit properties and methods from the constructor function.
