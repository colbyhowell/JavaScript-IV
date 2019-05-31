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
        console.log("Today, we are learning about" + this.favSubjects)
    }
    grade(student, subject){
        console.log('${student.name} received a perfect score on {subject}')
    }
}

class Student extends Person{
  constructor(attr){
    super(attr)
    this.background = attr.background
    this.className = attr.className
    this.favSubjects = attr.favSubjects
  }
  // listsSubjects(favSubjects){
  //   favSubjects.forEach(function(subjects){
  //   console.log(subjects)
  //   })
  // }

listsSubjects(favSubjects){
    favSubjects.forEach(function(item){
      console.log(item);
    });
  }


  prAssignment(subject){
    console.log(`${this.name} has begun sprint challenge on ${this.favSubjects}`)
  }

  sprintChallenge(){
    console.log(`${this.name} has begun sprint challenge on ${this.favSubjects}`)
  }
}

class ProjectManager extends Instructor{
  constructor(attrs){
    super(attrs)
    this.gradClassName = attrs.gradClass
    this.favInstructor = attrs.favInstructor
  }
  standUp(channel){
    console.log(this.name + "announced to " + this.channel + "@channal standy times")
  }
  debugsCode(){
    console.log(`${this.name} debugs ${student.name}'s code on ${this.subject}'`)
  }
}

const colby = new Student({name: "colby", age: 29, location: "Louisiana", background: "marketing", favLanguage: "JavaScript", catchPhrase:"what's that smell?", className:"WEBPT7", favSubjects: ["science", "english", "computers"]})

console.log(colby)

console.log(colby.sprintChallenge())