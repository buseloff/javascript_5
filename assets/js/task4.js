"use strict";

let user1 = "Ivan Petrov";
let user2 = "Sofia Ivanova";
let user3 = "Max Jackson";

const userArray = [user1, user2, user3];

const objUser1 = {
  name: "Ivan",
  surname: "Petrov",
  fullName: function () {
    return this.name + " " + this.surname;
  },
};

function User(name, surname) {
  this.name = name;
  this.surname = surname;
}

const objUser2 = new User("Ivan", "Ivanov");

class UserClass {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  get fullName() {
    return this.name + " " + this.surname;
  }
}

const objUser3 = new UserClass("Ivan", "Ivanov");

console.log(userArray.join(" | "));
console.log(objUser1.fullName());
console.log(objUser2);
console.log(objUser3.fullName);
