"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "John",
    age: 30,
    email: "john@example.com",
    isActive: true
};
// let name : string, age : number, email : string, isActive : boolean;
// function createUser({name  , age: number, email : string, isActive:boolean}){
//     console.log(name, age, email, isActive);
// }
// createUser({ name: "John",
// age: 30,
// email: "john@example.com",
// isActive: true})
function createUser(_a) {
    var number = _a.age, name = _a.name, string = _a.email, boolean = _a.isActive;
    return { name: "John",
        age: 30,
        email: "john@example.com",
        isActive: true };
}
console.log(createUser(User));
