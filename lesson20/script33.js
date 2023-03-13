//   Task 1

function* generateRandomNum(curr, last) {
  for (let i = 0; i < 10; i++) {
    let num = (Math.random() * (last - curr) + curr).toFixed();
    yield num;
  }
}

const randomGenerator = generateRandomNum(1, 50);

for (let num of randomGenerator) {
  console.log(num);
}

//   Task

async function showMyDayRoutine(time) {
    
  const wakeUp = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("At " + time + " I am wake up."), 1000);
  });
  const result = await wakeUp;
  console.log(result);

  const breakfast = new Promise(function (resolve, reject) {
    setTimeout(
      () => resolve("At " + (time + 1) + " am I have breakfast."),
      1000
    );
  });
  const result1 = await breakfast;
  console.log(result1);

  const learnJS = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("At " + (time + 2) + " am I learn JS."), 1000);
  });
  const result3 = await learnJS;
  console.log(result3);

  const lunch = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("At " + (time - 8) + " pm I have lunch."), 1000);
  });
  const result4 = await lunch;
  console.log(result4);

  const myBusiness = new Promise(function (resolve, reject) {
    setTimeout(
      () =>
        resolve("At " + (time - 7) + " pm I go on business or go for a walk."),
      1000
    );
  });
  const result5 = await myBusiness;
  console.log(result5);

  const dinner = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("At " + (time - 2) + " pm I have dinner."), 1000);
  });
  const result6 = await dinner;
  console.log(result6);

  const learningJS = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("At " + (time - 1) + " pm I learn JS."), 1000);
  });
  const result7 = await learningJS;
  console.log(result7);

  const timeToSleep = new Promise(function (resolve, reject) {
    setTimeout(
      () =>
        resolve(
          "At " + (time + 2) + " pm I go to sleep and learn JS in my dream."
        ),
      1000
    );
  });
  const result8 = await timeToSleep;
  console.log(result8);
}

showMyDayRoutine(9);
