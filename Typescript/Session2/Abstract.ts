/**
 * Circle , Square, Rectangle --- shapes
 */
/**
 * Feature - Description
class - Defines the blueprint of an object
constructor - Initializes object properties
extends - Inheritance from a base class
public/private - Access control
static - Shared across all instances
readonly - Immutable once set
abstract - Defines abstract methods in base classes
get/set - Property accessors
implements - Interface implementation
 */

abstract class Shapes{
    name:string
    area:number;
    constructor(name:string){
        this.name= name;
    }

    abstract calculateArea():void

    printArea(){
        console.log(`area of ${this.name} is ${this.area}`);
    }

}

class Circle extends Shapes{
    radius:number
    constructor(name:string, radius:number){
        super(name);
        this.radius = radius;
    }

    calculateArea(): void {
        this.area = (22/7)*this.radius*this.radius;
    }

}

class Rectangle extends Shapes{
    length:number
    width:number 
    constructor(name:string, length:number,width:number){
        super(name);
        this.length = length;
        this.width= width;
    }

    calculateArea(): void {
        this.area = this.length*this.width;
    }
}
let circle = new Circle('Circle',7);
circle.calculateArea();
circle.printArea();

let rectangle = new Rectangle('Rectangle', 4,5);
rectangle.calculateArea();
rectangle.printArea();