function addsum(num : number){
    return num + 2;
}
addsum(5);
function getUpper(val : string){
    return val.toUpperCase();
}
getUpper('hello');
// TypeScript also supports type inference, which means that you don't have to explicitly define the type of the parameter or return value. TypeScript will automatically infer the type based on the value you pass to the function.

function signUpUser(username: string, email: string, password:string , ispaid : boolean){
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password :', password);
    console.log('Is Paid:', ispaid);
};
signUpUser('john', 'john@gmail.com','123456', true);
export{}