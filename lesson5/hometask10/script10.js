// Task 1

let number = "";
let num = 20;
for (let i = 10; i <= 20; i++) {
  number += i + (i < num ? ',' : '');
}
console.log(number);

// Task 2

let countNumber = "";
for (let i = 10; i <= 20; i++) {
  countNumber += `${i ** 2} `;
}
console.log(countNumber);

// Task 3

let multTable = "";
for (let i = 1; i <= 10; i++) {
  multTable += `${i * 7} `;
}
console.log(multTable);

// Task 4

let sum = 0;
for (let i = 1; i <= 15; i++) {
  sum += i;
}
console.log(sum);

//  Task 5

let mult = 1;
for (let i = 15; i <= 35; i++) {
  mult *= i;
}
console.log(mult);

//  Task 6

let arithmeticMean = 0;
for (let i = 1; i <= 500; i++) {
  arithmeticMean += i / 500;
}
console.log(arithmeticMean);

//  Task 7

let countsum = 0;
for (let i = 30; i <= 80; i++) {
  if (i % 2 === 0) {
    countsum += i;
  }
}
console.log(countsum);

//  Task 8

let findNumber = "";
for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0) {
    findNumber += `${i} `;
  }
}
console.log(findNumber);

//  Task 9

const number1 = Number(prompt("Введіть своє число:"));
let n = "";

for (let i = 0; i <= number1; i++) {
  if (number1 % i === 0) {
    n += `${i} `;
  }
}
console.log(n);

//   Task 10 , Task 11

let resultNumber = 0;
let sumOfNumbers = 0;
for (let i = 0; i <= number1; i++) {
  if (number1 % i === 0) {
    n += i;
    if (i % 2 === 0) {
      resultNumber++;
      sumOfNumbers += i;
    }
  }
}
console.log(resultNumber);
console.log(sumOfNumbers);

//   Task 12

let multiply;
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    multiply = i * j;
    console.log(`${i} * ${j} = ${multiply}`);
  }
}
