/**
 * 1. Arithmetic Operators : Any Mathematical Operator you are trying to perform.
 * 2. Assignment Operators : Assigning a value
 * 3. Camparison Operators : Comparing Values
 * 4. Logical Operators : specially used to club condition or decide on the action. &&(AND) ||(OR)
 */
/**
 * Arithmetics Operators
 * +,-,/,*,%,,++,--
 * 
 */

// let num1 = 5 ;
// let num2 = 6 ;

// sum = num1 + num2
// console.log(sum)

// let str1 = 'Training';
// let str2 = " Playwright";

// concatStr = str1 + str2
// console.log(concatStr);

// let totalNumber = 100;

// let subtractedValue = totalNumber-40
// console.log(subtractedValue);
// let dividedNumber = 100/5;
// console.log(dividedNumber);

// let num1 = 5;
// console.log(num1);
// num1++;// it is incrementing the value of num1 by 1.

// console.log(num1);

// for(let i =0;i<5 ; i++){
//     console.log(i);
// }
// let num2 =10;
// num2--;
// console.log(num2);
// for(let i =10;i>0;i--){
//     console.log(i);
// }

/**
 * = , +=,-=,**=, /=,%=
 */

// let a = 1
// //a = a+1;
// //a +=1; // we are adding 1 to a and the new value is assiged to a
// a +=4 ;
// console.log(a);

// // a = a-2;
// a -=2;
// console.log(a);

// //a = a/3;
// a /=3;
// console.log(a);

// //a= a *5;
// a *=5;
// console.log(a);

// //a = a%2; 5/2  2 ,1
// a %=2;

// console.log(a);


// let a = 5;

//  //a = a**3
//  a **=3;

//  console.log(a)

/**
 * == value comparison
 * === value and Type comparison
 * != value not equal to 
 * !== value and type not equal to
 * > greater than
 * < less than
 * >= greater than and equals to
 * <= less than and equals to.
 */




// if(a===str1){ // Compare the value and type of the variable (condtion1 and condition2)
//     console.log("both values are equal");
// }else{
//     console.log("both values are not equal");
// }
// console.log(typeof(a))
// console.log(typeof(str1));  
// if(a !== b){ /// value or type should not be equal (condition1 or condition2)
//      console.log("Do task A");
// }else{
//     console.log("Do Task B");
// }

let a = 25; // Number type
let b = '25'; // string type
// if(a<b || a==b){ //Either a should be less than b or a should be equal to b
//     console.log("a is less than b");
// }else{
//     console.log("b is less than a");
// }

if(a==b || typeof(a)==typeof(b)){ // a should be equal b (or) type of a should be equal type b
    console.log("Both A and B have same values and type")
}else{
    console.log("Both A and B have different values and type")
}