//complete this code
class Person {
  constructor(name, age) {
    // Call the setters using the arguments
    this.name = name;
    this.age = age;
  }

  // Use a backing variable (_name) to store the data
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  // Use a backing variable (_age) to store the data
  get age() {
    return this._age;
  }

  set age(val) {
    // Setters must NOT return a value; they just assign it
    this._age = val;
  }
}

class Student extends Person {
  constructor(name, age) {
    super(name, age);
  }

  study() {
    console.log(`${this.name} is studying`);
  }
}

class Teacher extends Person {
  constructor(name, age) {
    super(name, age);
  }

  teach() {
    console.log(`${this.name} is teaching`);
  }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
