const numbersArray = [ 3, 6, 1, 5, 4, 2];
console.log(numbersArray);

numbersArray.sort( (a, b) => a - b );
console.log(numbersArray);
numbersArray.splice(1, 3);
console.log(numbersArray);
