const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
 return val;
}

function identityTwo<Type>(val: Type): Type {
    return val;
}

identityTwo(`typescript`);
console.log(identityTwo(`typescript`));
