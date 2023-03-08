const myDayRoutine = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(9), 1000);
})
  .then(function (resolve) {
    console.log("At " + resolve + " am wake up.");
    return resolve + 1;
  })
  .then(function (resolve) {
    console.log("At " + resolve + " am I have breakfast.");
    return resolve + 1;
  })
  .then(function (resolve) {
    console.log("At " + resolve + " am I learn JS.");
    return resolve - 10;
  })
  .then(function (resolve) {
    console.log("At " + resolve + " pm I have lunch.");
    return resolve + 1;
  })
  .then(function (resolve) {
    console.log("At " + resolve + " pm I go on bussiness or go for a walk");
    return resolve + 5;
  })
  .then(function (resolve) {
    console.log("At " + resolve + " pm I have dinner.");
    return resolve + 1;
  })
  .then(function (resolve) {
    console.log("At " + resolve + " pm I learn JS.");
    return resolve + 3;
  })
  .then(function (resolve) {
    console.log(
      "At " + resolve + " pm I go to sleep and learn JS in my dreams."
    );
  })
  .catch((err) => {
    console.log(err);
  });
