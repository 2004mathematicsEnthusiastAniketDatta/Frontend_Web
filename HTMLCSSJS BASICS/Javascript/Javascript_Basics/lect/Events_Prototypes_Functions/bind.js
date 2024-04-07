//bind function() returns a function that has access to the variables in its parent scope
//this is known as lexical scoping or closures.
//we can bind an object to any function and store in some variable, later as per our requirement we can call that function with that object
const obj = {name : "Javascript Window"} //object
function abcd(){
    console.log(this); 
}
const abcdbindedobj = abcd.bind(obj);
abcdbindedobj(); // { name: 'Javascript Window' }
// we may require the function  binded to  object  later in the program.
 