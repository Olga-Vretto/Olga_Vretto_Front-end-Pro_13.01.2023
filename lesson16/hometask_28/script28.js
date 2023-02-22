//   Task 1

function isTodayDate(milliseconds) {
  const date = new Date();
  const anotherDate = new Date(milliseconds);
  if (
    date.getDate() === anotherDate.getDate() &&
    date.getMonth() === anotherDate.getMonth() &&
    date.getFullYear() === anotherDate.getFullYear()
  ) {
    return true;
  } else {
    return false;
  }
}

const now = Date.now();
console.log(isTodayDate(now));


//   Task 2

function getTimeFormat(milliseconds) {
  const date = new Date(milliseconds);
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  const hour = ("0" + date.getHours()).slice(-2);
  const minutes = ("0" + date.getMinutes()).slice(-2);

  return `${day}.${month}.${year} ${hour}:${minutes}`;
}

const currentDate = Date.now();
console.log(getTimeFormat(currentDate));


//   Task 3

function getTimeDifference(milliseconds) {
  let currentDate = Date.now(milliseconds);
  const days = ((milliseconds - currentDate) / 87600000).toFixed(0);
  const hours = ((milliseconds - currentDate) / 3600000).toFixed(0);
  const minutes = ((milliseconds - currentDate) / 60000).toFixed(0);
  const seconds = ((milliseconds - currentDate) / 1000).toFixed(0);
  const millisecondss = milliseconds - currentDate;
  return ` 
     It's early morning... You drank your coffee and start working and count:
     ${days} days or
     ${hours} hours or
     ${minutes} minutes or
     ${seconds} seconds or
     ${millisecondss} milliseconds till you finish your work and feel free-e-e :)`;
}

console.log(getTimeDifference(1677159990000));
