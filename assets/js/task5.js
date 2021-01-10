"use strict";
/*class Animal {
  constructor(name) {
    this.name = name;
  }
  sound() {
    console.log(`${this.name} speak`);
  }
}

class Cat extends Animal {
  constructor(name, speed) {
    super(name);
    this.speed = speed;
  }
  sound() {
    console.log(`${this.name} meow`);
  }
  run() {
    console.log(`Speed of ${this.name} is ${this.speed}`);
  }
}

const animal1 = new Animal("Barsik");
animal1.sound();
const cat1 = new Cat("Vasya", 15);
cat1.sound();
cat1.run();
*/

class User {
  constructor(name, password, email) {
    this.name = name;
    this.password = password;
    this.email = email;
  }
  userInfo() {
    console.log(`User ${this.name}: ${this.email}`);
  }
}

const user1 = new User("Vasya", "dfdfgd", "tru@hrn.ru");
user1.userInfo();

class Student extends User {
  constructor(name, password, email, ...score) {
    super(name, password, email);
    this.score = score;
  }
  scoreAll() {
    console.log(`Student ${this.name} scores: ${this.score.join(", ")}`);
  }
  scoreAvg() {
    console.log(
      `Student ${this.name} average score: ${(
        this.score.reduce((sum, current) => sum + current, 0) /
        this.score.length
      ).toFixed(1)}`
    );
  }
  userInfo() {
    console.log(`Student ${this.name}: ${this.email}`);
  }
}

const student1 = new Student("Ivan", "qwerty", "wer@list.by", 8, 9, 11, 10);
student1.userInfo();
student1.scoreAll();
student1.scoreAvg();

class Teacher extends User {
  constructor(name, password, email, workingHours = 800, salary) {
    super(name, password, email);
    this.workingHours = workingHours;
    this.salary = salary;
  }
  addSalary() {
    if (this.workingHours > 800) {
      this.salary = 1.1 * this.salary;
    }
  }
  userInfo() {
    console.log(`Teacher ${this.name}: ${this.email} salary: ${this.salary}$`);
  }
}

const teacher1 = new Teacher("Maria", "jsdhjsk", "wet@yu.us", 850, 1000);
teacher1.userInfo();
teacher1.addSalary();
teacher1.userInfo();
