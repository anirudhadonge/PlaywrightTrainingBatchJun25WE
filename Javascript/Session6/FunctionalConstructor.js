

function student(name , rollNo){
    this.name=name;
    this.rollNo = rollNo;
    this.display =  function(){
        console.log(`${this.name} and ${this.rollNo}`);
}
}

function EngineeringStudent(name,rollNo,branch){
    student.call(name,rollNo);
    this.branch= branch;
    this.display = function(){
        console.log(`${this.name} and ${this.rollNo}and ${this.branch}`);
    }
}
EngineeringStudent.prototype = Object.create(student.prototype);
EngineeringStudent.prototype.constructor = EngineeringStudent;
let student1 = new EngineeringStudent('anirudha',7,'mechanical');
let student2 = new EngineeringStudent('Aarti',8,'ENTC');

student1.display();
student2.display();