// modules
/**
 * ESModules: Newer version of javascript
 * Export , Import, Default Export
 * commonjs: older ECMA 2015 were using commonjs
 * Module.Exports, require()
 * 
 * Export of two types (ESmodules)
 * Named Export
 *  1. You can have any number of Named export in a file.
 *  2. You need to import with the same name
 *  3. You need to import it inside {}
 * Default Export
 *  1. Only one Default export in a file.
 *  2. You can import it with any name.
 *  3. You need not to import it in {}
 */
// const {add,subtract,a} = require('../modules/CommonJsExport.js')
// const {Animal} = require('./../Session7/Classes.js');

// console.log(add(3,5))

// console.log(subtract(5,6));

// console.log(a);

// let myPet = new Animal('Bingo');

// console.log(myPet);

import  {display}  from "../modules/ESModulesExport.js";
import v1 from '../modules/ESModulesExport.js'
// const {add,subtract,a} = require('../modules/CommonJsExport.js')
// const {Animal} = require('./../Session7/Classes.js');

display("EsModules",()=>{
    console.log("Arrow function called")
});

let car =new v1(4000,1350);
console.log(car);
