"use strict";
// let score = prompt ("Enter your score: ");
// let score =document.querySelector("#score").value;
let score = 90;
let hitesh = { name: "Hitesh", id: 1234 };
hitesh = { name: "Hitesh", id: 1234, role: "Admin" };
console.log(hitesh);
function getDbId(id) {
    if (typeof id === "string") {
        return id.toUpperCase();
    }
    else {
        return id.toFixed();
    }
    // fetch().then().catch();
    console.log(`db id is ${id}`);
}
getDbId(1234);
const data1 = [1, 2, 3, 4, 5];
const data2 = ["1", "2", "3", "4", "5"];
console.log(data1);
console.log(data2);
