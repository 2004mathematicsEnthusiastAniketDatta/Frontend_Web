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
class Stack<T> {
    private items: T[] = [];

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }
}

// Usage
const numberStack = new Stack<number>();
numberStack.push(10);
numberStack.push(20);
console.log(numberStack.pop()); // Output: 20

const stringStack = new Stack<string>();
stringStack.push("apple");
stringStack.push("banana");
console.log(stringStack.pop());

class Box<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }
}

// Usage
const numberBox = new Box<number>(42);
console.log(numberBox.getValue()); // Output: 42

const stringBox = new Box<string>("Hello, world!");
console.log(stringBox.getValue()); // Output: "Hello, world!"



class Pair<K, V> {
    constructor(public key: K, public value: V) {}
}

// Usage
const numberStringPair = new Pair<number, string>(1, "one");
console.log(numberStringPair.key, numberStringPair.value); // Output: 1 "one"

const stringBooleanPair = new Pair<string, boolean>("enabled", true);
console.log(stringBooleanPair.key, stringBooleanPair.value); // Output: "enabled" true
