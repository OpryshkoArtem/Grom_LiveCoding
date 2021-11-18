console.log('hello');

function getSenseOfLife() {
  return 42;
  // console.log(42);  => underfined
}

const res = getSenseOfLife();
console.log(res);

console.log(getSenseOfLife());

// =====
function getSquared(a) {
  return a * a;
}

// test data
console.log(getSquared(8));
console.log(getSquared(-6));
console.log(getSquared('8'));

// ==========
const printMessage = num => {
  console.log(`I am ${num} years old`);
};
console.log(printMessage(34));
console.log(printMessage('34'));
// input: num
// out: underfined

// ==========
// test data  => !!!!!
console.log(printMessage(34));
console.log(printMessage(0));
console.log(printMessage(19));

// ==========
const mult = (num1, num2) => num1 * num2;

// test data  => !!!!!
console.log(mult(34, 10));
console.log(mult(0, 15));
console.log(mult(19, -4));

// ==========
const getMagicNumber = () => {}; //  =>  undefined
console.log(getMagicNumber()); //  =>  undefined

// function exxpresion & function declaration
