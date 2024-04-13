// createUser({name:"", email: "" , isActive: true})
type User ={
    readonly _id: string; // cannot be changed
    name: string;
    email: string;
    isActive?: boolean;    
}
// function createUser(user: User){
//     return user;
// }
let myUser: User = {
    _id: "1245",
    name: "John",
    email: "john@reddifmail.com",
    isActive: false
}

myUser.email = "John@reddifmail.com";
// myUser._id = "1234"; // Cannot assign to '_id' because it is a read-only property.ts(2540)

console.log(myUser);


















export {};