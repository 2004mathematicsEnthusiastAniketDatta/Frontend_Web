"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User = {
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
function createUser({ age: number, name, email: string, isActive: boolean }) {
    return { name: "John",
        age: 30,
        email: "john@example.com",
        isActive: true };
}
console.log(createUser(User));
function createCourse() {
    return { name: "Reactjs", price: 70 };
}
createCourse();
