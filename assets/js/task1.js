"use strict";

//Создание квадратной матрицы целых чисел из 10 эл.
let sizeOfSqureMatrix = 6;
let rangeOfRandom = 10;
let squareMatrix = [];

function getSquareMatrixOfrandomInteger(sizeOfSqureMatrix, rangeOfRandom) {
  let squareMatrix = [];
  for (let i = 0; i < sizeOfSqureMatrix; i++) {
    squareMatrix[i] = [];
    for (let j = 0; j < sizeOfSqureMatrix; j++) {
      squareMatrix[i][j] = parseInt(Math.random() * rangeOfRandom);
    }
  }
  return squareMatrix;
}

function makeZeroElements_1(squareMatrix) {
  let size = squareMatrix.length;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j <= i; j++) {
      squareMatrix[i][j] = "*";
    }
  }
  return squareMatrix;
}

function makeZeroElements_2(squareMatrix) {
  let size = squareMatrix.length;
  for (let i = 0; i < size; i++) {
    for (let j = i; j < size; j++) {
      squareMatrix[i][j] = "*";
    }
  }
  return squareMatrix;
}

function makeZeroElements_3(squareMatrix) {
  let size = squareMatrix.length;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size - i; j++) {
      squareMatrix[i][j] = "*";
    }
  }
  return squareMatrix;
}
function makeZeroElements_4(squareMatrix) {
  let size = squareMatrix.length;
  for (let i = 0; i < size; i++) {
    for (let j = size - i - 1; j < size; j++) {
      squareMatrix[i][j] = "*";
    }
  }
  return squareMatrix;
}

function makeZeroElements_5(squareMatrix) {
  let size = squareMatrix.length;
  for (let i = 0; i < Math.round(size / 2); i++) {
    for (let j = i; j < size - i; j++) {
      squareMatrix[i][j] = "*";
      squareMatrix[size - 1 - i][j] = "*";
    }
  }
  return squareMatrix;
}

function makeZeroElements_6(squareMatrix) {
  let size = squareMatrix.length;
  for (let i = 0; i < Math.round(size / 2); i++) {
    for (let j = 0; j <= i; j++) {
      squareMatrix[i][j] = "*";
      squareMatrix[i][size - 1 - j] = "*";
      squareMatrix[size - i - 1][j] = "*";
      squareMatrix[size - i - 1][size - 1 - j] = "*";
    }
  }
  return squareMatrix;
}

function makeZeroElements_7(squareMatrix) {
  let size = squareMatrix.length;
  for (let i = 0; i < Math.round(size / 2); i++) {
    for (let j = 0; j <= i; j++) {
      squareMatrix[i][j] = "*";
      squareMatrix[size - i - 1][j] = "*";
    }
  }
  return squareMatrix;
}

function makeZeroElements_8(squareMatrix) {
  let size = squareMatrix.length;
  for (let i = 0; i < Math.round(size / 2); i++) {
    for (let j = 0; j <= i; j++) {
      squareMatrix[i][size - 1 - j] = "*";
      squareMatrix[size - i - 1][size - 1 - j] = "*";
    }
  }
  return squareMatrix;
}

function makeZeroElements_9(squareMatrix) {
  let size = squareMatrix.length;
  for (let i = 0; i < Math.round(size / 2); i++) {
    for (let j = i; j < size - i; j++) {
      squareMatrix[size - 1 - i][j] = "*";
    }
  }
  return squareMatrix;
}

function makeZeroElements_10(squareMatrix) {
  let size = squareMatrix.length;
  for (let i = 0; i < Math.round(size / 2); i++) {
    for (let j = i; j < size - i; j++) {
      squareMatrix[i][j] = "*";
    }
  }
  return squareMatrix;
}

function makeZeroElements_11(squareMatrix) {
  let size = squareMatrix.length;
  for (let i = 0; i < Math.round(size / 2); i++) {
    for (let j = 0; j < size - i; j++) {
      squareMatrix[i][j] = "*";
      squareMatrix[size - i - 1][j] = "*";
    }
  }
  return squareMatrix;
}

function makeZeroElements_12(squareMatrix) {
  let size = squareMatrix.length;
  for (let i = 0; i < Math.round(size / 2); i++) {
    for (let j = i; j < size; j++) {
      squareMatrix[i][j] = "*";
      squareMatrix[size - i - 1][j] = "*";
    }
  }
  return squareMatrix;
}

function makeZeroElements_13(squareMatrix) {
  let size = squareMatrix.length;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size - i; j++) {
      squareMatrix[i][j] = "*";
    }
  }
  for (let i = 0; i < Math.round(size / 2); i++) {
    for (let j = 0; j <= i; j++) {
      squareMatrix[i][size - 1 - j] = "*";
      squareMatrix[size - i - 1][size - 1 - j] = "*";
    }
  }
  return squareMatrix;
}

function makeZeroElements_14(squareMatrix) {
  let size = squareMatrix.length;
  for (let i = 0; i < size; i++) {
    for (let j = size - i - 1; j < size; j++) {
      squareMatrix[i][j] = "*";
    }
  }
  for (let i = 0; i < Math.round(size / 2); i++) {
    for (let j = 0; j <= i; j++) {
      squareMatrix[i][j] = "*";
      squareMatrix[size - i - 1][j] = "*";
    }
  }
  return squareMatrix;
}

//Функция вывода 2 мерной матрицы
function showMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].join(" "));
  }
  return "";
}

//Вызов функций

console.log("___________________________________________");
console.log(
  showMatrix(makeZeroElements_1(getSquareMatrixOfrandomInteger(6, 10)))
);

console.log("_______________________________");
console.log(
  showMatrix(makeZeroElements_2(getSquareMatrixOfrandomInteger(6, 10)))
);

console.log("_______________________________");
console.log(
  showMatrix(makeZeroElements_3(getSquareMatrixOfrandomInteger(6, 10)))
);

console.log("_______________________________");
console.log(
  showMatrix(makeZeroElements_4(getSquareMatrixOfrandomInteger(6, 10)))
);
console.log("_______________________________");
console.log(
  showMatrix(makeZeroElements_5(getSquareMatrixOfrandomInteger(6, 10)))
);

console.log("_______________________________");
console.log(
  showMatrix(makeZeroElements_6(getSquareMatrixOfrandomInteger(6, 10)))
);

console.log("_______________________________");
console.log(
  showMatrix(makeZeroElements_7(getSquareMatrixOfrandomInteger(6, 10)))
);

console.log("_______________________________");
console.log(
  showMatrix(makeZeroElements_8(getSquareMatrixOfrandomInteger(6, 10)))
);

console.log("_______________________________");
console.log(
  showMatrix(makeZeroElements_9(getSquareMatrixOfrandomInteger(6, 10)))
);

console.log("_______________________________");
console.log(
  showMatrix(makeZeroElements_10(getSquareMatrixOfrandomInteger(6, 10)))
);

console.log("_______________________________");
console.log(
  showMatrix(makeZeroElements_11(getSquareMatrixOfrandomInteger(6, 10)))
);
console.log("_______________________________");
console.log(
  showMatrix(makeZeroElements_12(getSquareMatrixOfrandomInteger(6, 10)))
);

console.log("_______________________________");
console.log(
  showMatrix(makeZeroElements_13(getSquareMatrixOfrandomInteger(6, 10)))
);

console.log("_______________________________");
console.log(
  showMatrix(makeZeroElements_14(getSquareMatrixOfrandomInteger(6, 10)))
);

/*
//Создание массива целых чисел из 10 эл.
let lengthOfUserArray = 10;
let arrayTest = new Array(lengthOfUserArray);
for (let i = 0; i < arrayTest.length; i++) {
  arrayTest[i] = parseInt(Math.random() * 100);
}

//Функция возвращает true если число содержится в массиве
function HasNumberInArray(array, number) {
  let flag = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == number) {
      flag = true;
      break;
    }
  }
  return flag;
}

let userNumber;
//Ввод числа пользователем
userNumber = prompt("Введите число", 50);

//Если введено число вызывается функция, если не число - выводится сообщение
if (!isNaN(userNumber)) {
  console.log(
    "Содержит ли массив " +
      "[" +
      arrayTest.join(" ") +
      "]" +
      " число " +
      userNumber +
      "?"
  );
  if (HasNumberInArray(arrayTest, Number(userNumber))) {
    console.log("Содержит");
  } else {
    console.log("Не содержит");
  }
} else {
  console.log("Введено не числовое значение");
}

userNumber = 31;
let flag = false;
for (let i = 2; i <= userNumber - 1; i++) {
  if (userNumber % i == 0) {
    flag = true;
  }
}
if (flag) {
  console.log("Yes");
} else {
  console.log("No");
}

for (let i = 0; i < arrayTest.length; i++) {
  arrayTest[i] = parseInt(Math.random() * 10);
}

flag = false;
for (let i = 0; i < arrayTest.length - 1; i++) {
  if (arrayTest[i] === arrayTest[i + 1]) {
    flag = true;
  }
}
console.log(arrayTest.join(" "));
flag ? console.log("Yes") : console.log("No");
*/
