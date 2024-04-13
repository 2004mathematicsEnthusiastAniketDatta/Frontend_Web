"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// function createUser(user: User){
//     return user;
// }
var myUser = {
    _id: "1245",
    name: "John",
    email: "john@reddifmail.com",
    isActive: false
};
myUser.email = "John@reddifmail.com";
// myUser._id = "1234"; // Cannot assign to '_id' because it is a read-only property.ts(2540)
console.log(myUser);
