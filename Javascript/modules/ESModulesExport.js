

export default class Vehicle{ // Named Export

    constructor(length, width){
        this.length = length;
        this.width= width
    }

}


export function display(message){ // Named Export
    console.log(`Message to be displayed is ${message}`);
}