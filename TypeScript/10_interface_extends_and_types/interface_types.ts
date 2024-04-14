interface User {
    readonly dbId: number;
    email: string;
    userId: number;
    // startTrial: () => string; in typescriptor startTrial() =>{
//     return "Trial started";
// }
    starting(): string;
    getCoupon(couponname: string): number;
}

interface User {
    githubToken : string;
}

interface Admin extends User {
    role: "admin" | "ta" | "learner";
}

const typescriptor: User = {dbId:1234 ,email: "typescriptor@.js" , userId: 2211,starting(){
    return "Starting";
},getCoupon(couponname: string){return 10;}};

typescriptor.email = "typescriptor@.ts";
console.log(typescriptor);
console.log(typescriptor.getCoupon("typescriptor"));
console.log(typescriptor.starting());
