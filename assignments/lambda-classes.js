// CODE here for your Lambda Classes
class Person {
    constructor(personAttributes) {
        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.location = personAttributes.location;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}

class Instructor extends Person {
    constructor(instructorAttributes) {
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;        
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade (student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
    appointGrade(student) {
        student.grade = Math.round(Math.random() * 100);
        console.log(`${student.name}'s grade is now ${student.grade}`);
    }
}

class Student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
        this.grade = studentAttributes.grade;
    }
    listsSubjects(favSubjects, length) {
        for (let i = 0; i < length; i++) {
            console.log(favSubjects[i]);
        }
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
    graduate() {
        if (this.grade === 0) {
            console.log(`${this.name} has completely failed at Lambda school!!!`)
        }
        else {
            if (this.grade > 70) {
                console.log(`${this.name} has graduated from Lambda school!!!`)
            }
            else {
                console.log(`${this.name} is not ready to graduate.`)
            }
            }
    }
}

class ProjectManager extends Instructor {
    constructor(pmAttributes) {
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }
    standUp(slackChannel) {
        console.log(`${this.name} announces to ${slackChannel}, @${slackChannel} standy times!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

// Students -------------------------------
const firstStudent = {
    name: 'Steven',
    age: 33,
    location: 'Deland',
    previousBackground: 'Sorcerer to the king',
    className: 'Javascript 4',
    favSubjects: ['Javascript', 'CSS', 'HTML'],
    grade: 89
}
const secondStudent = {
    name: 'Tyler',
    age: 18,
    location: 'Miami',
    previousBackground: 'Court Jester',
    className: 'Javascript 4',
    favSubjects: ['Lunch', 'Javascript', 'CSS', 'HTML'],
    grade: 72
}
const thirdStudent = {
    name: 'Sarah',
    age: 21,
    location: 'North Pole',
    previousBackground: 'Santas Elf',
    className: 'Javascript 4',
    favSubjects: ['Lunch', 'Javascript', 'CSS', 'HTML', 'Making toys'],
    grade: 54
}

const stevenStudent = new Student(firstStudent);
const tylerStudent = new Student(secondStudent);
const sarahStudent = new Student(thirdStudent);

// Instructors ----------------------------
const firstInstructor = {
    name: 'David',
    age: 38,
    location: 'Westeros',
    specialty: 'Back-end',
    favLanguage: 'Java-script',
    catchPhrase: 'What is dead may never die'
}
const secondInstructor = {
    name: 'Jean-Luc',
    age: 26,
    location: 'Enterprise NCC-1701',
    specialty: 'Back-end',
    favLanguage: 'Java-script',
    catchPhrase: 'Make it so #1'
}
const instructorDavid = new Instructor(firstInstructor);
const instructorFrank = new Instructor(secondInstructor);

// Project Managers -----------------------
const firstProjectManager = {
    name: 'Diane',
    age: 42,
    location: 'Chicago',
    specialty: 'Back-end',
    favLanguage: 'Java-script',
    catchPhrase: 'Winter is Here!',
    gradClassName: 'Web18',
    favInstructor: 'Jean-Luc'
}
const secondProjectManager = {
    name: 'Jawarhula',
    age: 30,
    location: 'Midgard',
    specialty: 'Front-End',
    favLanguage: 'Java-script',
    catchPhrase: 'Winter is Here!',
    gradClassName: 'Web18',
    favInstructor: 'David'
}

const pmDiane = new ProjectManager(firstProjectManager);
const pmJawarhula = new ProjectManager(secondProjectManager);

// Some testing!
stevenStudent.listsSubjects(stevenStudent.favSubjects, stevenStudent.favSubjects.length);
tylerStudent.PRAssignment('biology')
sarahStudent.sprintChallenge('Battle-tech');
stevenStudent.speak();

instructorDavid.demo(tylerStudent.favSubjects[0]);
instructorFrank.grade(sarahStudent, sarahStudent.favSubjects[3]);
instructorDavid.speak();

pmDiane.standUp('web20_adam');
pmDiane.grade(stevenStudent, 'voyeurism');
pmJawarhula.speak();

// Stretch items tests
pmJawarhula.appointGrade(tylerStudent);
instructorDavid.appointGrade(stevenStudent);
instructorFrank.appointGrade(sarahStudent);

stevenStudent.graduate();
tylerStudent.graduate();
sarahStudent.graduate();

