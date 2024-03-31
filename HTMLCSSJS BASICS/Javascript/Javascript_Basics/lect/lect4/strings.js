const name="aniket"
const repocount= 50
// console.log(name + repocount +"value");
console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

// sourcery skip: dont-use-wrappers-for-builtins
const gameName = new String('aniket');
//String 'aniket' is an object with the key value pairs: 0:'a', 1:'n', 2:'i',4:'k',5:'e',6:'t' 
console.log(gameName);
console.log(gameName[0]);//a
console.log(gameName.length);//6
console.log(gameName.__proto);//undefined
console.log(gameName.charAt(2));//i
console.log(gameName.indexOf('i'));//2
