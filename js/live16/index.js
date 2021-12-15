// 'use strict';

const timer = {
  minsPassed: 0,
  secondsPassed: 0,
  intervalID: null,
  startTimer() {
    this.intervalID = setInterval(() => {
      if (this.secondsPassed === 60) {
        this.minsPassed += 1;
        this.secondsPassed = 0;
      }
      this.secondsPassed += 1;
    }, 1000);
  },
  getTime() {
    return this.secondsPassed < 10
      ? `${this.minsPassed}:0${this.secondsPassed}`
      : `${this.minsPassed}:${this.secondsPassed}`;
  },
  stopTimer() {
    clearInterval(this.intervalID);
  },
  resetTimer() {
    this.minsPassed = 0;
    this.secondsPassed = 0;
  },
};

// test data
// timer.startTimer();

// context definition
// function sum(a, b) {
//   console.log(this);
// }

// sum(10, 23);

// parameters
// parent lex env
// context

// const obj = {
//   firstName: 'John',
//   printName() {
//     console.log(this);
//   },
// };
// obj.printName();

// втрата контексту
// const func = obj.printName;
// func();

// [1, 2].filter(el => {
//   console.log(this);
// });
