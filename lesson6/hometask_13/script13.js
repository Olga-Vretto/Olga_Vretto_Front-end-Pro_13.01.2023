const numbersArray = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

// task 1

let positiveNumSum = 0;
let posNumQuantity = 0;

for (let i of numbersArray) {
  if (i >= 0) {
    positiveNumSum += i;
    posNumQuantity++;
  }
}
console.log(positiveNumSum);
console.log(posNumQuantity);

// task 2

const minNumber = Math.min(...numbersArray);
console.log(minNumber);
console.log(numbersArray.indexOf(minNumber));

// task 3

const maxNumber = Math.max(...numbersArray);
console.log(maxNumber);
console.log(numbersArray.indexOf(maxNumber));

//  task 4

let negativeElements = 0;

for (let i of numbersArray) {
  if (i <= 0) {
    negativeElements++;
  }
}
console.log(negativeElements);

//  tasks 5, 8, 6, 7

let oddNumbers = 0;
let sumOfOddNum = 0;
let evenNumbers = 0;
let sumOfEvenNum = 0;

for (let num of numbersArray) {
  if (num > 0) {
    if (num % 2 !== 0) {
      oddNumbers++;
      sumOfOddNum += num;
    } else {
      evenNumbers++;
      sumOfEvenNum += num;
    }
  }
}
console.log(oddNumbers);
console.log(sumOfOddNum);
console.log(evenNumbers);
console.log(sumOfEvenNum);

// task 9

let multOfPosNum = 1;

numbersArray.forEach((element) => {
  if (element > 0) {
    multOfPosNum *= element;
  }
});
console.log(multOfPosNum);

// task 10

const mapArray = numbersArray.map((number) => {
  if (number === maxNumber) {
    return maxNumber;
  } else {
    return 0;
  }
});
console.log(mapArray);
