/**
 * Function : Its reusable block of code with some instruction.
 * There is keyword called "function"
 * 1. let <functionName> = function (){}
 * 2. function <functionName>(){}
 * 3. Arrow function : ()=>{}
 * Function inside a function
 */

// let displayNumberManupulation = function (myNumber) {
//   console.log(Math.round(myNumber));
//   console.log(Math.ceil(myNumber));
//   console.log(Math.floor(myNumber));
//   console.log(Math.trunc(myNumber));
// };

// let myFunction = function (myVar) {
//   console.log(typeof myVar);
// };

// let display = function(var1,var2){
//     let sum = var1+var2;
//     console.log(sum);
//     console.log(typeof(sum));
// }
// myFunction("Anirudha");
// myFunction(5.6789890);
// myFunction(false);

// function display(var1, var2) {
//   return var1 + var2;
//   console.log(sum);
//   console.log(typeof sum);
// }

// console.log(display(5, 6));
// console.log(display(4,7));
// console.log(display(4));
// console.log(display(4, "class"));

// let sum = (var1,var2)=>{ return var1+var2};

// console.log(sum(4,5));
/// "This is a playwright training session"
// setTimeout(()=>{
// console.log("This is a playwright training session");
// },5000)


function fun1(fun2){
    console.log("this is function1")
    fun2();
}

fun1(function (){
    console.log("this is function2");
})