/**
 * its a blue print for creating object
 * All the properties that object has.
 */

/**
 * Access modifiers in Typescript : 
 * Public: Members can be accessed from anywhere
 * private: Members can be accessed only inside the class
 * protect: Semi Private access modifier. The member can be access inside the same class and the subclass (child Class);
 * you need to declare it in advance.
 */
/**
 * Readonly Properties
 */
/**
 * Getter and Setters
 */

/**
 * Instance variable and class variables 
 */
class Vehicle{
    public brand: string;
    protected height: number;
    private width:number;
    public static statvar:Number;
    //constructor(private brand:string , private height:number, public width:number){}
    constructor(brand:string,height:number,width:number){
        this.brand = brand;
        this.height= height;
        this.width = width;
    }

    display():void{
        console.log(this.width);
    }

    set setWidth(width:number){
        this.width = width
    }

    get getWidth():number{
        return this.width;
    }
}

class Car extends Vehicle{

    constructor(brand:string,height:number,width:number){
        super(brand,height,width);
    }

    displayHeight():void{
        console.log(this.height);
    }
}
Vehicle.statvar=100;
let m1 = new Vehicle('Maruti',1350,3999); //m1 is an instance of vehicle.
 // Class variable we are accessing using the class name
console.log(m1)
console.log(Vehicle.statvar);
 let m2 = new Vehicle('Hyundai',1350,3999);
console.log(m2);
console.log(Vehicle.statvar);

