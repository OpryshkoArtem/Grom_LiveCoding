// const array = [1, 2, 3, 4];
// const array = new Array([1, 2, 3, 4]);
// console.log(array);

// input: arr, func
// output: arr

// callback
// input: elem, index, array
// output: boolean

// 1.algo
// 2.apply callback for every elem
// 3.if callback true - add to the new arr
const array = [1, 2, 3, 4];
const filterArrayElements = (arr, callback) => {
  // put you code here
  const result = [];
  for (let index = 0; index < arr.length; index += 1) {
    const el = arr[index];
    if (callback(el, index, arr)) {
      result.push(el);
    }
  }

  return result;
};

// test data 1
const test = filterArrayElements(array, el => el % 2 === 0);
console.log(test);

// test data 2
console.log(
  filterArrayElements(array, (el, index) => {
    if (index <= 2) {
      return true;
    }

    return false;
  }),
);

//  ** MAP
const mapArrayElements = (arr, callback) => {
  // put you code here
  const res = [];
  for (let index = 0; index < arr.length; index += 1) {
    const elem = arr[index];
    res.push(callback(elem, index, arr));
  }
  return res;
};
