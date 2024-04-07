//keyword: specific reserved words which have some meaning to the javascript engine and they cannot be used as variable names
//this is also a keyword in javascript (very suspenseful) because this is a reference to the object that is executing the current function or the current code block.
//conditions and case scenarios:


//global

console.log(this); //window object

//function
function blockforthis(){
    console.log(this); //window object
}
blockforthis();

//function inside method (es5):-window
let obj={
    name: function(){
        console.log(this);
},
    ages:25,
};
obj.name(); //object : {name:f}
console.log(obj.ages);  //object: {age:25}

//function inside method (es6):- object
let obj2 = {
    sayName: function(){
        console.log(this); //object : {sayName:f} , this.age: 25
// sourcery skip: avoid-function-declarations-in-blocks
        function childfnc(){
            console.log(this);//window
            //rebinding to the window object
        }
        childfnc();
    },
    age:25,
};
obj2.sayName(); 


//arrow function:- object
let obj3 = {
  sayName : function(){
    const c = () => {
      console.log(this); //object from parent function 
    }
    c();
}
}
obj3.sayName();

let obj4 = {
    sayName : () => {
        console.log(this); //window
    }
}
obj4.sayName(); //window as obj4 is present in global execution context where this is window object and parent scope is obj4 for sayName function  and arrow function does not have its own this keyword so that  will take the parent scope this keyword which is window object


//this in constructor function:-new blank object

function Add(){
    console.log(this); //window
}
const Ans = new Add(); // new blank object

//this in event listener:- element that the event was working on 
//this.html 
/*let btn = document.querySelector('button');
      btn.addEventListener('click', function(){
      console.log(this); //button element
      })*/

      