"use strict";

try {
  newMyVar;
  console.log(newMyVar);
} catch (e) {
  console.log("error");
}

let error1 = new Error("My Error!");
try {
  throw error1; // создание исключения
} catch (e) {
  // инструкции для обработки ошибок
  console.log(e); // передать объект исключения обработчику ошибок
}

try {
  console.log("try");
  console.log(sum);
} catch (e) {
  console.log("catch");
  console.log(e.name);
  console.log(e.message);
  console.log(e.stack);
  console.error(e);
} finally {
  console.log("Always");
}

let myError = new Error("Not a number!");
let userNumber1 = prompt("Input number 1");
let userNumber2 = prompt("Input number 2");
let sum = +userNumber1 + +userNumber2;
try {
  if (isNaN(sum)) {
    throw myError;
  } else {
    console.log("Sum of your numbers = " + sum);
  }
} catch (e) {
  console.log(e.name);
  console.log(e.message);
} finally {
  console.log("Program finished!");
}

const myPow = (n) => {
  if (typeof n !== "number") {
    throw new TypeError("Parameter is not a number");
  }
  if (!Number.isSafeInteger(n)) {
    throw new RangeError("Parameter is not a safe integer");
  }
  return n * n;
};

const testFun = () => {
  let result = null;
  try {
    result = myPow(646464);
  } catch {
    result = "Error for myPow";
  } finally {
    return result;
  }
};

console.log("Result of function = ", testFun());
