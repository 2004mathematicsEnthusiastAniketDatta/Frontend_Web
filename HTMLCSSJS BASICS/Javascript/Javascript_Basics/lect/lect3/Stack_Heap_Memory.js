// Stack (Primitive Data Type)
// Heap (Reference(Non-Primitive)Data Type)
// Stack: Primitive Data Types are stored in Stack
// Heap: Non-Primitive Data Types are stored in Heap

// Call Stack: LIFO (Last In First Out)
let myname="Aniket";
let anothername=myname;
anothername="Ram";
console.log(anothername);
console.log(myname);

//Heap: Heap Tree like growth (insertion of nodes like tree)
//userOne variable name is present in stack and the object{email:"user@gmail.com",upi:"user@okpnbbank",} is present in heap

let userOne={
    email:"user@gmail.com",
    upi:"user@okpnbbank",
    }
let userTwo=userOne;
userTwo.email="aniket@gmail.com";
console.log(userTwo);
