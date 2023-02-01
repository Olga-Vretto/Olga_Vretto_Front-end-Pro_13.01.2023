const array = [1, 2, 3, 4, 5, 6, 7];
function removeElement(array, item) {
  return array.filter((number) => {
    return number ? number !== item : array;
  });
}
console.log(removeElement(array, 5));
