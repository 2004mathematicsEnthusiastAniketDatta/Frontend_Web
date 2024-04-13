// let score = prompt ("Enter your score: ");
// let score =document.querySelector("#score").value;
var score = 90;
var hitesh = { name: "Hitesh", id: 1234 };
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
    console.log("db id is ".concat(id));
}
getDbId(1234);
