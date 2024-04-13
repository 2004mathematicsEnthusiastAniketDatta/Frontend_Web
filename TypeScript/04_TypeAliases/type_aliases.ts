"use strict";

type User = {
    name: string;
    age: number;
    email: string;
    password: string;
    isActive : boolean;
}

// type Mystring = string;
function createUser(user: User){
    return  user;

}
console.log(createUser({name: "John", age: 25, email: " john@gmail.com ", password:"123456" , isActive: true}));


