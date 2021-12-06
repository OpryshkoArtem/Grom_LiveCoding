// const keys = ['foo', 'bar', 'baz'];
// const values = [11, 22, 33];

// const result = keys.reduce((acc, elem, index) => ({...acc, [elem]: values[index]}), {});
// console.log(result);

// //test arrays
// let newParamArr = [1, 2, 3, 4, 5];
// let paramVal = ["one", "two", "three", "four", "five"];

// //create an empty object to ensure it's the right type.
// let obj = {};

// //loop through the arrays using the first one's length since they're the same length
// for(let i = 0; i < newParamArr.length; i++)
// {
//     //set the keys and values
//     //avoid dot notation for the key in this case
//     //use square brackets to set the key to the value of the array element
//     obj[newParamArr[i]] = paramVal[i];
// }

// console.log(obj);

// ** ----------------------------------
// ** ----------------------------------
// ** ----------------------------------
// input: Array, Array
// output: object
// 1. create empty obj
// 2. iterate arrays & put key/value to the obj
// 3	loop first
// 4. test data
// ** ----------------------------------

// BAD practice
// function buildObject(keysList, valuesList) {
//   // put you code here
//   const res = {};
//   for (let index = 0; index < keysList.length; index += 1) {
//     res[keysList[index]] = valuesList[index];
//   }
//   return res;
// }

//  **  ---------------------
// const keys = ['name', 'address', 'age'];
// const values = ['Bob', 'Ukraine', 34];
// const buildObject = (keys, values) => keys.reduce((acc, elem, index) => ({...acc, [elem]: values[index]}), {});
// const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }
// console.log(result);

// const buildObject = (keysList, valuesList) => keysList.reduce((acc, key, index) => ({...acc, [key]: valuesList[index]}), {});

function buildObject(keysList, valuesList) {
  return keysList.reduce((acc, key, index) => ({ ...acc, [key]: valuesList[index] }), {});
}

// test data
const keys = ['brand', 'year', 'color'];
const values = ['BMW', 2005, 'white'];
console.log(buildObject(keys, values));

//  **  ----------------------------------------



//