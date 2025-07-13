/**
 * If Statement : Validation a condition before executing a code  if(condition){<scope>}
 * ternary operator (condition)? <Execute action if condition is satisfied> : < Execute Action as condition is not satisfied
 * Else statment
 * Nest if statements
 * switch statements
 *  
 */


//let flag = false
// let num1 = 3;  //==, >, <
// if(flag){
//     console.log("The Condition is met");
// }
// function validationCondition(myNumber){
//Nested if Implementation
// if(myNumber==4){
//     console.log("4 is not equal to the number");
// } else if(myNumber >4){
//     console.log('The number provided is greater than 4');
// } else if(myNumber == 0){
//     console.log("The number is Zero");
// } else {
//     console.log('The number provided is less than 4');
// }
//(myNumber==4)?console.log("The condition is met"): console.log("Condition is not met");
//(myNumber!=4)?console.log("Condition is not met")
// }

// validationCondition(num1);


/**
 * 
 * switch(condition){
 * 
 * case condidtion1:
 * <Instruction to execute>
 * case condition2:
 * <Instruction to execute>
 * case condition2:
 * <Instruction to execute> 
 * } 
 */

// let month = 7;
// switch(month){
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("February");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     case 5:
//         console.log("May");
//         break;
//     default:
//         console.log("input didnt match");
// }


for(let i=0 ; i<=3; i++){

    if(i>=1){ // 0,1
    break; //continue;// if you continue execution instruction 
    }
    console.log("index of "+i);
}



