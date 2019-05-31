// CODE here for your Lambda Classes

class Person {
    constructor (attr){
        this.name = attr.name
        this.age = attr.age
        this.location = attr.location 
    }
    speak(){
        console.log(`Hello my name is ${this.name}, and I am from ${this.location}`)
    }
}

class Instructor extends Person{
    constructor(attr){
        super(attr)
        this.specialty = attr.specialty
        this.favLanguage = attr.favLanguage
        this.catchPhrase = attr.catchPhrase
    }
    demo(subject){
        console.log("Today, we are learning about " + subject)
    }
    grade(student, subject){
        console.log(student + " received a perfect score on " + subject)
    }
}

class Student extends Person{
  constructor(attr){
    super(attr)
    this.background = attr.background
    this.className = attr.className
    this.favSubjects = attr.favSubjects
  }
  
listsSubjects(){
    this.favSubjects.forEach(function(subject){
      console.log(subject);
    });
  }


  prAssignment(subject){
    console.log(`${this.name} has submitted a PR on ${subject}`)
  }

  sprintChallenge(subject){
    console.log(`${this.name} has begun sprint challenge on ${subject}`)
  }
}

class ProjectManager extends Instructor{
  constructor(attrs){
    super(attrs)
    this.gradClassName = attrs.gradClass
    this.favInstructor = attrs.favInstructor
  }
  standUp(channel){
    console.log(this.name + " announced to " + channel + ", @channel standy times")
  }
  debugsCode(student, subject){
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
  }
}

const colby = new Student({name: "colby", age: 29, location: "Louisiana", background: "marketing", favLanguage: "JavaScript", catchPhrase:"what's that smell?", className:"WEBPT7", favSubjects: ["science", "english", "computers"]})

const fred = new Instructor({name: "Fred", age: 32, location: "Texas", background: "coding", favLanguage: "Python", catchPhrase:"Make My Day", className:"WEB17", favSubjects: ["JS", "Python", "ladies"], specialty: "web development"})

const steve = new ProjectManager({name: "Steve", age: 25, location: "New York", background: "cooking", favLanguage: "JS", catchPhrase:"Dollar A Day", className:"iOS18", favSubjects: ["Apple Language", "Python", "JS"], specialty: "Mobile Apps", gradClassName: "iOS17", favInstructor: "Dan"})

console.log(colby)
console.log(fred)
console.log(steve)
colby.speak()
colby.sprintChallenge("JS4")
colby.prAssignment("JS4")
colby.listsSubjects()
fred.demo("maths")
fred.grade("John", 100)
steve.standUp("@webPT7")
steve.debugsCode(colby, "math")