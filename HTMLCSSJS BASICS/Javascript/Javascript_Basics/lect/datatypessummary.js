//Primitive Data Types: Number, String, Boolean, Undefined, Null, Symbol, BigInt
const num = 3;
const str = 'Hello';
const bool = true;
const und = undefined;
const outsideTemp = null;
let userEmail;
const sym = Symbol('123');
const id=Symbol('123');
console.log(sym==id); //false
const bigNumber = 345654356754n;
console.log(typeof bigNumber);
//Non-Primitive Data Types or Reference types: Object, Array, Function, Date, RegExp, Map, Set, WeakMap, WeakSet, Error, Math, JSON, Promise, Proxy, Reflect, Intl, WebAssembly, ArrayBuffer, SharedArrayBuffer, DataView, TypedArray, Float32Array, Float64Array, Int8Array, Int16Array, Int32Array, Uint8Array, Uint8ClampedArray, Uint16Array, Uint32Array, BigInt64Array, BigUint64Array , etc.

const heroes=["shaktiman","naagraj","doga"];
let myObj={
name:"John",
age:30,
}
const myFunction=function(){
    console.log("Hello world");
}
console.log(typeof myFunction);
console.log(typeof myObj === typeof outsideTemp); //true as null is object
console.log(myFunction);
