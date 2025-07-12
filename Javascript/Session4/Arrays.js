/**
 * Arrays--->Object: "Collection of items (same type of items or different types of items)"
 * Hetergenous/Homogenous
 * Hetergenous-> collection of different types of items
 * Homogenous -> collection of same type of items.
 */

// let myNumber = [1,2,3,4,"Anirudha",false];
// /**
//  * 0-1
//  * 1-2
//  * 2-3
//  * 3-4
//  * 4-"Anirudha"
//  * 5-false * 
//  */

// /// Positioning of the items its start with 0
// console.log(myNumber[-1]);
// /// Length ---- Total Number of element present in an Array
// console.log(myNumber.length);
// /// Assigning the value at a given position
// myNumber[3]= 5;
// console.log(myNumber);
// console.log(`${myNumber} with length ${myNumber.length}`);
// /// push()---> Add element at the end of the array
// myNumber.push(7);
// console.log(`${myNumber} with length ${myNumber.length}`);

// /// Add element at the begining
// myNumber.unshift("Playwright");
// console.log(`${myNumber} with length ${myNumber.length}`);

// /// Removing the element from the Array
// //pop(): it will remove the last element
// //shift(): remove the first element

// myNumber.pop();
// console.log(`${myNumber} with length ${myNumber.length}`);

// myNumber.shift();
// console.log(`${myNumber} with length ${myNumber.length}`);

/// Splice(): it is used to add element inside at a given index and also this is used for removing 
//the element at a given index

// let fruits = ["Apple","Banana","Kiwi", "Mango","Orange"]

// console.log(fruits.splice(2,1,"Cheeko","Cheeko"));
// console.log(fruits);
// slice() some part of the Array

//console.log(fruits.slice(-3,-2))

// Validating the content

//console.log(fruits.includes("Mango",6));
// let flag = false;
// for(let index=0 ; index<fruits.length;index++){
//     if(fruits[index]=="Mango"){
//         flag = true;
//         break;
//     }
// }

// console.log(flag);//

// let myFruit =["grapes","Cheeko",1,2,3,"Mango","grapes"] 

// console.log(fruits.join("-"));

// console.log(fruits.concat(myFruit));
// console.log(fruits);
// console.log(myFruit);
// fruits.concat()
// console.log([fruits,myFruit]);
// console.log([...fruits,...myFruit]);

/**
 * For Loop
 * ForEach
 * Filter
 * Map
 * 
 */
// let newArray =[]

// console.log("-----For Loop Example-----");
// for(let index=0;index<fruits.length;index++){
//     newArray.push(fruits[index]+"_NewArray");
//     //console.log(fruits[index]);
// }
// console.log(newArray);

// console.log("---- ForEach Loop----");
// fruits.forEach((value)=>{
//     console.log(value);
// })

// console.log("-----Map Example-----");

// let myUpperArray = fruits.map((value,index)=>{
//     return (value+index).toUpperCase()
// })

// console.log(myUpperArray);

//Filter method in Array
let numbers =["Mango","Banana",1,5,10,5,true]

let newNumberArray = numbers.filter((val,i)=>{
    console.log(i);
    console.log(typeof(val));
    return typeof(val)!="number"
})

console.log(newNumberArray);