const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

function generateKey(length, characters) {
  let key = "";
  let countNum = 0;
  while (countNum < length) {
    key += characters.charAt(Math.random() * characters.length);
    countNum += 1;
  }
  return key;
}
console.log(generateKey(16, characters));
