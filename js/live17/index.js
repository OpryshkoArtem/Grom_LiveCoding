'use strict';

function printMessage(country, city) {
  console.log(this);

  console.log(`Hello, ${this.firstName}. My age is ${this.age}. I am from ${country}, ${city}`);
}

const user = {
  firstName: 'Andrey',
  age: 111,
  tempFunc: 'some secret data',
};

// input: obj, args(optional)
// output: function

// option1
const bindedFunc = printMessage.bind(user);
bindedFunc('Ukraine', 'Kyiv');

// option2
const bindedFunc2 = printMessage.bind(user, 'UK');
bindedFunc2('London');

// option3
const bindedFunc3 = printMessage.bind(user, 'UK', 'Liverpool'); // пріоритет АРГ.. з bind
bindedFunc3('London');

// *****************************

// input: func, obj, args(optional)
// output: func

function myBind(func, context, ...bindArgs) {
  return function (...funcArgs) {
    // input: obj, array
    // output: result of func
    func.apply(context, [...bindArgs, ...funcArgs]);
  };
}

// test data
// option1
const myBindedFunc1 = myBind(printMessage, user);
myBindedFunc1('Ukraine', 'Odessa');

// option2
const myBindedFunc2 = myBind(printMessage, user, 'UK');
myBindedFunc2('London');

// option 3
const myBindedFunc3 = myBind(printMessage, user, 'UK', 'Liverpool');
myBindedFunc3();

// BONUS  =>  написати свій bind без call і apply
