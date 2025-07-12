/**
 * Single value in a variable
 * 
 * Its is collection of Key-value pairs use to store and organize data.
 */

/**
 * 
 * Student Name
 * Roll No
 * Department
 * 
 * 
 */
// let studentName ="Anirudha";
// let rollNo = 7;
// let Department="Engineering";

let student ={
    studentName:"Anirudha",
    rollNo:7,
    Department:"Engineering",
    Display:  function(){
        console.log(`name :${this.studentName} and rollNo :${this.rollNo} and Department :${this.Department}`)
    },
    sum: function(a,b){
        console.log(a+b);
    },
    subtract: function(a,b){
        console.log(a-b);
    },
    hobbies:{
        name:"Playing Cricket"
    }
}


// console.log(student);

// console.log(student.Department);// Accessing the properties 
// console.log(student['Department']) // Accessing the properties ObjectVariableName[<key>]
// console.log(student.rollNo);
// console.log(student.studentName);

student.studentName = "Aniruddha Donge"

// student.Display();
// student.sum(4,5);
// student.subtract(5,6);

console.log(student.hobbies.name);