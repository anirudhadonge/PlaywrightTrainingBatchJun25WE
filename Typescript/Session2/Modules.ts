/**
 * Modules in javascript
 * 1. CommonJs
 * 2. EsModules
 * 
 * Modules in Typescript
 * 1. EsModules
 *     a.Export
 *        1. Named Export
 *             a. You need to import modules with the same name as it was export
 *             b. Import would be inside {} 
 *             c. A file can have multiple Named Export.
 *        2. Default Export
 *             a. you can import those modules with any name.
 *             b. Import should be outside {}
 *             c. A file can Have only one default export.
 *     b.Import 
 */
import itArray ,{ iterateArrayWithNumber } from "./Generics";

let anyArray=['Apple',"Banana",6,7]
let fruits:string[]=['Apple',"Banana"];
let myNumber:number[]=[2,3];
itArray<string,number>(fruits,5);
itArray<number,boolean>(myNumber,true);
itArray<any,string>(anyArray,"string");