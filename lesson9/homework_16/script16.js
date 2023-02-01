const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, item) {
  return array.filter(function (number) {
    if (number !== item) {
      return number;
    }
  });
}
console.log(removeElement(array, 5));
