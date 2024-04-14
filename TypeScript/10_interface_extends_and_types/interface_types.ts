// type.ts 
type Point = { 
	x: number; 
	y: number; 
}; 

const point: Point = { 
	x: 10, 
	y: 20, 
}; 

console.log(point.x); 
console.log(point.y);

// Interface.ts 
interface Person { 
	name: string; 
	age: number; 
} 

const person: Person = { 
	name: "John Doe", 
	age: 25, 
}; 

console.log(person.name); 
console.log(person.age);
