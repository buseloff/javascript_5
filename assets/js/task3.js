"use strict";

class User {
  static counter = 0;
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    User.counter++;
  }
  sayHello() {
    console.log(`Hello, ${this.fullName}!!!`);
  }
  get fullName() {
    return this.name + " " + this.surname;
  }
  isAdult() {
    if (this.age >= 18) {
      console.log(this.fullName + " is adult");
      return true;
    } else {
      console.log(this.fullName + " is not adult");
      return false;
    }
  }
}

const user1 = new User("Alex", "Fox", 52);
const user2 = new User("Mark", "Trump", 12);
const user3 = new User("Sofia", "Thompson", 36);

console.log(user1);
console.log(user2);
console.log(user3.fullName);
console.log(User.counter);
user1.sayHello();
user2.sayHello();
user3.sayHello();
user2.isAdult();
console.log(user1.isAdult());

class SumOfNumbers {
  constructor(number1, number2) {
    this.number1 = number1;
    this.number2 = number2;
    this.summa = number1 + number2;
  }
  get getSum() {
    return this.summa;
  }
}

const sum1 = new SumOfNumbers(25, 25);
console.log(sum1.getSum);

class Worker {
  static #counter = 0;
  #name = "";
  #surname = "";
  #rate = "";
  #days = "";
  constructor(name, surname, rate, days) {
    this.#name = name;
    this.#surname = surname;
    this.#rate = rate;
    this.#days = days;
    Worker.#counter++;
  }

  get fullName() {
    return this.#name + " " + this.#surname;
  }
  get getRate() {
    return this.#rate;
  }
  get getDays() {
    return this.#days;
  }
  getWage() {
    return this.#rate * this.#days;
  }

  static getCounter() {
      return this.#counter;
  }

  set setName(newName) {
      this.#name = newName;
  }
  set setSurname(newSurname) {
    this.#surname = newSurname;
}
}

const worker1 = new Worker("Paul", "Allen", 250, 15);
console.log(worker1.fullName);
console.log("Working days");
console.log(worker1.getDays);
console.log("Salary per day");
console.log(worker1.getRate);
console.log("Salary per day");
console.log("Wage");
console.log(worker1.getWage());

const worker2 = new Worker("Sofia", "Anderson", 300, 20);
console.log(worker2.fullName);
console.log("Working days");
console.log(worker2.getDays);
console.log("Salary per day");
console.log(worker2.getRate);
console.log("Wage");
console.log(worker2.getWage());
console.log("Wages of 2 workers");
console.log(worker1.getWage() + worker2.getWage());
console.log(Worker.getCounter());
