/**
 * InHeritance 
 *  1. Interface : Dont have an idea about the implementations. e.g payment application debit/Credit cards, Net banking, UPi
 *         -- Properties
 *         -- abstracts methods
 *  2. Clasess
 *      - Classes 
 *      - Abstract Class : Partial Idea about the implementation.
 *          - Cannot create an object of abstract class
 *          - Can contain Abstract methods and implmented methods.
 *          - use the keyword called "abstract"
 * Polymorphism 
 */


interface LivingBeing{
    span:number;
    habitat:string;

    action():void
    eat():void
}


class Animal implements LivingBeing{
    span: number;
    habitat: string;
    action(): void {
        console.log("Animal might walk or swim");
    }
    eat(): void {
        console.log("Animal are either carnivorous or herbivorous");
    }
    
}

class Bird implements LivingBeing{
    span: number;
    habitat: string;
    action(): void {
        console.log("99% percent of birds fly");
    }
    eat(): void {
        console.log("Birds are either carnivorous or herbivorous");
    }
    
}
