//call apply bind are three ways (methods) to call function considering any object to behave like this

function abcd(){
    console.log(this); 
}
abcd();//window object
const obj = {name : "Javascript Window"} //object
abcd.call(obj); // this has the object obj now
abcd.call(0); // [Number: 0]
abcd.call(Infinity); // [Number: Infinity]
abcd.call("string"); // [String: 'string']
abcd.call(true); // [Boolean: true]
abcd.call([]); // []
abcd.call({}); // {}
abcd.call(function(){console.log(this)}); // [Function (anonymous)] 
abcd.call(null); // window
abcd.call(undefined); // window
abcd.call(NaN); // [Number: NaN]
abcd.call(Symbol()); // [Symbol: Symbol()]
abcd.call(abcd()); //window

function add(a,b,c){
    console.log(a+b+c);
}
add.call(obj,1,2,3); //6




//apply
function abc(a,b,c){
console.log(this ,a,b,c);
}
abcd.apply(obj,[1,2,3]);  // { name: 'Javascript Window' } 1 2 3    
abcd.apply(0,[1,2,3]); // [Number: 0] 1 2 3
