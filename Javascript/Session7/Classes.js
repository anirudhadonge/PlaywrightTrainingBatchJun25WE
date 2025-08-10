/**
 * class 
 * class vs object 
 * 
 */
// Every property and methods are public in javascript class
// class is a blueprint of creating object.
// Constructor overloading is not allowed.
//class <ClassName>{}
// Access modifier in Javascript is class is public by default.
// there is no public, protect, private keyword.
// a, b assignc , getC are instance fields or methods
// Class field/Variables or method . You assigned a keyword called static to them
// Getters and setters in the class
// Getting the value of the fields
// setting the values of the filds.

// class Circle{

//     constructor(radius){
//         this.radius = radius;
//     }

//     get getRadius(){
//         return this.radius;
//     }

//     set setRadius(inputRadius){
//         this.radius = inputRadius;
//     }
// }

// let circle = new Circle(5);
// console.log(circle.getRadius);
// circle.setRadius= 7;
// console.log(circle.getRadius);


// Inheritance : Getting the property of the Parent and inherting it into itself
// Keyword that we uses is "Extends" 
// Polymorphism is basically combination of two words
// - poly --- many 
// - morph -- forms
// Polymorphish
// function with same name and Parameters in differnt class (class which have some relation inheritance) -- Function overriding.

class Animal{
    constructor(name){
        this.name = name;
        this.breed ="abc";
    }


    speak(message){
        console.log(message);
    }

    
    speak(){
        console.log("Animal speak in their languages");
    }
}

class Dog extends Animal{
    constructor(name,color){
        super(name);
        this.color=color;
    }

    speak(){
        console.log("Dog barks");
    }
}

// let a1 = new Animal('Bingo');
// console.log(a1);
// a1.speak();
// a1.speak("this is a message from function");
// let d1 = new Dog("xyz","black");
// console.log(d1);
// d1.speak();

module.exports={Animal,Dog}
