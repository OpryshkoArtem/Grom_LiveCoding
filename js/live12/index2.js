// input: obj1 obj2
// output: boolean

// algo
// 0. compare length, if not equal -> false
// 1. iterate obbj1 keys
// 2. icompare if(value1 != value2) -> false

// Home work

function compareObjects(obj1, obj2) {
//   const result =
//     Object.keys(obj1).length === Object.keys(obj2).length &&
//     Object.keys(obj1).every(key => obj1[key] === obj2[key]);
//   return result;
	const keys = Object.keys(obj1);
	if (keys.length === Object.keys(obj2).length){
		return false;
	}
	return (keys.every(key => obj1[key] === obj2[key])
}

// // examples
// const obj1 = {
//   name: 'Tom',
//   age: 17,
// };

// const obj2 = {
//   name: 'Bob',
//   age: 17,
// };

// const obj3 = {
//   name: 'Bob',
//   age: 17,
//   student: false,
// };

// const obj4 = {
//   name: 'Tom',
//   age: 17,
// };

// // test data
// console.log(compareObjects(obj1, obj2)); // ==> false
// console.log(compareObjects(obj2, obj3)); // ==> false
// console.log(compareObjects(obj1, obj4)); // ==> true




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

const getCustomersList = obj => {
	const keys = Object.keys(obj);
	const val = Object.values(obj);
	// let res = [];
	// for (let i=0; i < val.length; i++) {
	// 	res.push(val[i]);
	// }
	let res = val.map((item, index) => item.index.id = keys.index);
	console.log(res);

	return val;

};
console.log(getCustomersList(customers));
