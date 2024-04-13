// let score = prompt ("Enter your score: ");
// let score =document.querySelector("#score").value;
let score: number | string = 90;
// if(Number(score) > 50){
//     console.log("You passed the exam");
// }

type User = {
    name: string;
    id: number;
}

type Admin = {
    name: string;
    id: number;
    role: string;
}

let hitesh: User | Admin ={name: "Hitesh", id: 1234};
hitesh = {name: "Hitesh", id: 1234, role: "Admin"};
console.log(hitesh);


function getDbId(id: number | string){
    if(typeof id === "string"){
        return id.toUpperCase();
    }else{
        return id.toFixed();
    }
    // fetch().then().catch();
    console.log(`db id is ${id}`);
    
}
getDbId(1234);

const data1: number[] | string[] = [1,2,3,4,5];
const data2: number[] | string[] = ["1","2","3","4","5"];
console.log(data1);
console.log(data2);