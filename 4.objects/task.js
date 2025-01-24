function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

let student = new Student;

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;  
}

Student.prototype.addMarks = function (...marks) {
    if (student.hasOwnProperty("marks") === true) {
        this.marks = this.marks.concat(...marks);
    }
}

Student.prototype.getAverage = function () {

    let summ = this.marks.reduce((acc, ind) => acc + ind, 0);
    let average = summ / this.marks.length;
    if (student.hasOwnProperty("marks") === false && this.marks.length == 0) {
        return 0;
    } 
    if (student.hasOwnProperty("marks") === true) {
        return average;
    }

}

Student.prototype.exclude = function (reason) {
    delete student.subject;
    delete student.marks;
    this.Student.excluded = "reason";
}
