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
}

class Student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
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
    favSubjects: ['Javascript', 'CSS', 'HTML']
}
const secondStudent = {
    name: 'Tyler',
    age: 18,
    location: 'Miami',
    previousBackground: 'Court Jester',
    className: 'Javascript 4',
    favSubjects: ['Lunch', 'Javascript', 'CSS', 'HTML']
}
const thirdStudent = {
    name: 'Sarah',
    age: 21,
    location: 'North Pole',
    previousBackground: 'Santas Elf',
    className: 'Javascript 4',
    favSubjects: ['Lunch', 'Javascript', 'CSS', 'HTML', 'Making toys']
}

const steven = new Student(firstStudent);
const tyler = new Student(secondStudent);
const sarah = new Student(thirdStudent);

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
const david = new Instructor(firstInstructor);
const frank = new Instructor(secondInstructor);

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

const diane = new ProjectManager(firstProjectManager);
const Jawarhula = new ProjectManager(secondProjectManager);

// Some testing!
steven.listsSubjects(steven.favSubjects, steven.favSubjects.length);
tyler.PRAssignment('biology')
sarah.sprintChallenge('Battle-tech');
steven.speak();

david.demo(tyler.favSubjects[0]);
frank.grade(sarah, sarah.favSubjects[3]);
david.speak();

diane.standUp('web20_adam');
Jawarhula.grade(firstStudent, 'voyeurism');
Jawarhula.speak();


