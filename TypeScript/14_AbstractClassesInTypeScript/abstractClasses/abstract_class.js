var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Abstract class representing a shape
var Shape = /** @class */ (function () {
    function Shape() {
    }
    // Regular method
    Shape.prototype.displayInfo = function () {
        console.log("This is a ".concat(this.constructor.name, "."));
    };
    return Shape;
}());
// Concrete class Circle that extends Shape
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this) || this; // Must call super() in the constructor
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.area = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    return Circle;
}(Shape));
// Concrete class Rectangle that extends Shape
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        var _this = _super.call(this) || this; // Must call super() in the constructor
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.area = function () {
        return this.width * this.height;
    };
    return Rectangle;
}(Shape));
// Usage
var circle = new Circle(5);
var rectangle = new Rectangle(4, 6);
circle.displayInfo(); // This is a Circle.
console.log("Circle area: ".concat(circle.area())); // Circle area: 78.53981633974483
rectangle.displayInfo(); // This is a Rectangle.
console.log("Rectangle area: ".concat(rectangle.area())); // Rectangle area: 24
