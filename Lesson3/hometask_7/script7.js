const number1 = Number(prompt('Enter first number', ''));
const operation = prompt(
  'please, enter the operation:',
  'For example: "add" or "+" ect.');
const number2 = Number(prompt('Enter second number', ''));

switch (operation) {
  case '+':
  case 'add':
    alert(`${number1} + ${number2} = ${Number(number1) + Number(number2)}`);
    break;
  case '-':
  case 'sub':
    alert(`${number1} - ${number2} = ${Number(number1) - Number(number2)}`);
    break;
  case '*':
  case 'mult':
    alert(`${number1} * ${number2} = ${Number(number1) * Number(number2)}`);
    break;
  case '/':
  case 'div':
    alert(`${number1} / ${number2} = ${Number(number1) / Number(number2)}`);
    break;
  default:
    alert("Try again.");
    break;
}
