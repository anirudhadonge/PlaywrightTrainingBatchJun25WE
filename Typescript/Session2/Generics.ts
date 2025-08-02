/**
 * Generics :Create a reusable, flexible and type-safe code
 */


export default function iterateArray<T,P>(inputArray:T[],var1:P):void{
inputArray.forEach((value)=>{
    console.log(value);
})

console.log(`print the value ${var1}`)
}
export function iterateArrayWithNumber(inputArray:number[]):void{
inputArray.forEach((value)=>{
    console.log(value);
})
}
// let anyArray=['Apple',"Banana",6,7]
// let fruits:string[]=['Apple',"Banana"];
// let myNumber:number[]=[2,3];
// iterateArray<string,number>(fruits,5);
// iterateArray<number,boolean>(myNumber,true);
// iterateArray<any,string>(anyArray,"string");
