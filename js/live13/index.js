// input: obj( obj, obj)
// output: arr( obj, obj)

// algoritm
// 1. get key & values +++
// 2. add id to every value (map)
// 3. sort

// draft solution  (ok solution)
// const getCustomersList = obj => {
//   const keys = Object.keys(obj);

//   return Object.values(obj)
//     .map((el, index) => ({ ...el, id: keys[index] }))
//     .sort((a, b) => a.age - b.age);
// };

const getCustomersList = obj => {
  return Object.entries(obj)
    .map(([id, customer]) => ({ ...customer, id }))
    .sort((a, b) => a.age - b.age);
};

// destructing
const arr = [10, 22, 11];
const [el1, el2] = arr;
console.log(el1, el2);

const obj = {
  name: 'William',
  age: 54,
};

const { age, name } = obj;
console.log(age);
console.log(name);

// test data
const customers = {
  'customer-id-1': {
    name: 'William',
    age: 54,
  },
  'customer-id-2': {
    name: 'Tom',
    age: 17,
  },
};
console.log(getCustomersList(customers));
