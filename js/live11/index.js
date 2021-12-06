/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

// examples
const transaction = {
  value: 170,
  // currency: 'GRN',
};
// console.log(addPropertyV1(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }

// ** 1. ===================================

// input: obj, string, value(any type)
// output: obj

// function addPropertyV1(obj, key, value) {
//   // put your code here
//   obj[key] = value;
//   return obj;
// }

// // test data
// console.log(addPropertyV1(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
// console.log(transaction);

// ** 2. ===================================

// input: obj, string, value(any type)
// output: obj

// Object.assign
// input: target obj, source obj1, ..... source objN
// output: target obj

// function addPropertyV2(obj, key, value) {
// put your code here

// const sourceObj = { [key]: value };
// Object.assignobj(obj, sourceObj);
// return obj;

// 	return Object.assign( obj, { [key]: value });
// }

// // test data
// console.log(addPropertyV2(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
// console.log(transaction);

// ** 3. ===================================

// input: obj, string, value(any type)
// output: obj

// function addPropertyV3(obj, key, value) {
//   // put your code here
// 	return Object.assign({}, obj, { [key]: value });
// }

// function addPropertyWrong(obj, key, value) {
//   const objNew = Object.assign({ [key]: value }, obj);
//   return objNew;
// }

// // test data
// console.log(addPropertyV3(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
// console.log(transaction);

// ** 4. ===================================

function addPropertyV4(obj, key, value) {
  // put your code here
  return { ...obj, [key]: value };
}

// test data
console.log(addPropertyV4(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
console.log(transaction);
