const numbersList = [1, 2, 3, 4, 5];

const res = numbersList.push('222');

// numbersList[numbersList.length] = 33;

console.log(res);
console.log(numbersList);

//    =============
const numbersList2 = [1, 2, 3, 4, 5];
const res4 = numbersList2.shift();

// input  :
// output : element

console.log(numbersList2.shift());
console.log(numbersList2);

//  ===============

// ====== callback
// input  : num num func
// output : undefined

// input  : num
// output : undefined

function sum(from, to, printer) {
  let result = 0;
  for (let index = from; index <= to; index += 1) {
    result += index;
  }

  printer(result);
}

// test data
const num1 = 5;
const num2 = 10;

function printResultExample(result) {
  console.log(result);
}

sum(num1, num2, printResultExample);

//  =====

// ========    начальный массив  filter
const anotherNumbersList = [5, 0, 8, 10, -4, 50, 220];

// input  : callback
// output : new arr

// input  : number, index(optional), array(optional)
// output : boolean

const filterResult = anotherNumbersList.filter(function (num) {
  if (num > 5) {
    return true;
  }
  return false;
});

console.log(filterResult);
