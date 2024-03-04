//"EXECUTION CONTEXT"
//CALL STACK-> GLOBAL EXECUTION CONTEXT ,FUNCTIONS
//undefined is different from not defined 
//Two phases: Memory creation phase, code execution phase
//specific order
//javascript engine follows Just-in-Time compilation that is compiles the code as the control read the line   similar to interpreter plus compiler typeof idea
//Java Script can execute one command at a time and in a specific order
// alert("HELLO WORLD");
console.log("Hello World");
// Execution context ang global execution context in call stack 
//window object has a number of functions and is associated to many web browser APIs like console in console.log,f alert: {}
//web browser APIs environment , functions in setTimeout() and many functions that are to be pushed to microtask queue  and callback queue are present in window
//Synchronous single-threaded language with Asynchronous nature
//higher priority of microtask queue  for being transferred to call stack through event loop
function funcA(m,n){
    return m*n;
}
//var n=2 is wrong
//n:undefined initially
// sourcery skip: avoid-using-var
//do not use sourcery
let n=2
var n;//n:undefined before temporary  dead zone 
n=2;
//n:2 

