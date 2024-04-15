// Abstract class representing a shape
abstract class Shape {
    abstract area(): number; // Abstract method (no implementation)
  
    // Regular method
    displayInfo(): void {
      console.log(`This is a ${this.constructor.name}.`);
    }
  }
  
  // Concrete class Circle that extends Shape
  class Circle extends Shape {
    constructor(private radius: number) {
      super(); // Must call super() in the constructor
    }
  
    area(): number {
      return Math.PI * this.radius ** 2;
    }
  }
  
  // Concrete class Rectangle that extends Shape
  class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
      super(); // Must call super() in the constructor
    }
  
    area(): number {
      return this.width * this.height;
    }
  }
  
  // Usage
  const circle = new Circle(5);
  const rectangle = new Rectangle(4, 6);
  
  circle.displayInfo(); // This is a Circle.
  console.log(`Circle area: ${circle.area()}`); // Circle area: 78.53981633974483
  
  rectangle.displayInfo(); // This is a Rectangle.
  console.log(`Rectangle area: ${rectangle.area()}`); // Rectangle area: 24
  