/***
 * Loops : execute a piece of code in recurring manner. Then we will use loops.
 * e.g : Cricket : Bowler --- Bowling 6 balls in a over . 0 0 0 0 0 0
 * for Loop
2. while Loop  : condition is checked at the begining of the loops 
3. do...while Loop : The instruction gets execute and then the condition is validated.
4. for...of Loop
5. for...in Loop
 * 
 */
/**
 * for(starting Condition ; limit(ending condition); increment){
 * }
 * 
 */

// for(let i = 5 ; i >0 ; i--){

//     console.log(i);

// }

/**
 * while(condition){
 * instruction
 * }
 * 
 */

/**
 * do{
 * instruction
 * }while(condition)
 */

// let i = 20;

// while(i<5){
//     console.log("In While loop "+i);
//     i++
// }
// do{
//     console.log("In Do while Loop"+ i)
//     i++
// }while(i>20)
// console.log("Out of the loop");

// For of --- it deals with values
// for in --- its deals with Keys

/// Key value pairs 
// Array  {
//key :value
//}




/**
 * 0-- apple
 * 1 -- banana
 * 2 -- orange
 * 3 -- mango 
 */

// for(let a of student){
//     console.log(a);
// }

let fruits = ["apple", "banana", "orange", "mango"];
let student =   {
    name:"Anirudha",
    rollNo:7,
    batch:"Enginering"
    }

for(let value of fruits){
  console.log("value of fruits "+value);
}

for(let key in fruits){
   console.log(`value for ${key} is ${fruits[key]}`);
}
