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

const arrOneLength = Number(prompt('Введіть довжину першого масиву:',''));
const arrTwoLenght = Number(prompt('Введіть довжину другого масиву:',''));


