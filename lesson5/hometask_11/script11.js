//  Task 1

let number = "";
for (let i = 20; i <= 30; i += 0.5) {
  number += `${i} `;
}
console.log(number);

//  Task 2

let exchange;
for (let i = 10; i <= 100; i += 10) {
  exchange = `${i * 27} `;
  console.log(`${i} $ = ${exchange}Uah`);
}

//  Task 3

const n = Number(prompt("Enter your number:", ""));
let integer = "";

for (let i = 1; i <= 100; i++) {
  if (i * i < n) {
    integer += `${i} `;
  }
}
console.log(integer);

//  Task 4

const simpleNumber = Number(prompt("Enter the number"));
let isSimple = 'Simple';

for (let i = 2; i <= simpleNumber; i++) {
  if (simpleNumber % i === 0 && simpleNumber !== i && simpleNumber !== 1) {
    isSimple = 'Not a simple';
}}
console.log(isSimple);

//  Task 5

const lastNumber = Number(prompt('Enter the number'));
let isTrue = false;

for ( let i = 1; i <= lastNumber; i++) {
    if ( Math.pow (3, i) === lastNumber) {
        isTrue = true;
    }
}
console.log(isTrue);
