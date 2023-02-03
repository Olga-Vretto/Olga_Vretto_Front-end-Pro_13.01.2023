//  Task 1

const array = [1, "apple", 8, "true", 14, 20, { name: "Bob" }, 5];
const numbersFromArr = array.filter((element) => typeof element === "number");

function average(arr) {
  let arithmeticMean = 0;
  for (let i = 0; i < arr.length; i++) {
    arithmeticMean += arr[i];
  }
  return arithmeticMean / arr.length;
}
console.log(average(numbersFromArr));


//  Task 2

const number1 = +prompt("Введіть перше число",'');
const mathSign = prompt("Введіть знак",'');
const number2 = +prompt("Введіть друге число",'');

function doMath(x, znak, y) {
  let result = 0;

  switch (znak) {
    case "+":
      result = x + y;
      break;
    case "-":
      result = x - y;
      break;
    case "*":
      result = x * y;
      break;
    case "/":
      result = x / y;
      break;
    case "%":
      result = (x * y) / 100;
      break;
    case "^":
      result = x ** y;
      break;
    default:
      result = "Спробуйте ще.";
      break;
  }

  return result;
}
console.log(doMath(number1, mathSign, number2));


//  Task 3

const arrOneLength = Number(prompt("Введіть довжину першого масиву:"));
const arrTwoLength = Number(prompt("Введіть довжину другого масиву:"));
const firstArr = [];

function getArray(arr, arrTwo) {
  for (let i = 0; i < arr; i++) {
    const secondArr = [];
    for (let j = 0; j < arrTwo; j++) {
      const elemMean = prompt(`Введіть значення внутрішніх масивів ${j}`);
      secondArr.push(elemMean);
    }
    firstArr.push(secondArr);
  }
  return firstArr;
}
console.log(getArray(arrOneLength, arrTwoLength));


//   Task 4

const userString = prompt("Введыть ваш текст", "");
const symbolsToRemove = prompt("Введіть літери, що видаляться", "");

function removeLetters(str, letters) {
  let arr = str.split("");
  for (let i = 0; i < letters.length; i++) {
    arr = arr.filter((element) => {
      return element !== letters[i];
    });
  }
  return arr.join("");
}
console.log(removeLetters(userString, symbolsToRemove));
