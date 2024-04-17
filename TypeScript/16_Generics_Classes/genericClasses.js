// function getProperty<Type , Key extends keyof Type>(obj: Type, key: Key) {
//     return obj[key];
// }
// function anotherFunction <T,U>(valOne: T, valTwo: U):object {
//     return {
//          valOne: valOne,
//          valTwo: valTwo
//     };
// }
// anotherFunction( 3, "3")
var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    return Stack;
}());
// Usage
var numberStack = new Stack();
numberStack.push(10);
numberStack.push(20);
console.log(numberStack.pop()); // Output: 20
var stringStack = new Stack();
stringStack.push("apple");
stringStack.push("banana");
console.log(stringStack.pop());
var Box = /** @class */ (function () {
    function Box(value) {
        this.value = value;
    }
    Box.prototype.getValue = function () {
        return this.value;
    };
    return Box;
}());
// Usage
var numberBox = new Box(42);
console.log(numberBox.getValue()); // Output: 42
var stringBox = new Box("Hello, world!");
console.log(stringBox.getValue()); // Output: "Hello, world!"
var Pair = /** @class */ (function () {
    function Pair(key, value) {
        this.key = key;
        this.value = value;
    }
    return Pair;
}());
// Usage
var numberStringPair = new Pair(1, "one");
console.log(numberStringPair.key, numberStringPair.value); // Output: 1 "one"
var stringBooleanPair = new Pair("enabled", true);
console.log(stringBooleanPair.key, stringBooleanPair.value); // Output: "enabled" true
