/**
**====  map  ====*
input:  callbackFn => element
output: new arr

**====  find  ====*
input:  callbackFn => true => element
output: element or undefined

**====  forEach  ====*
input:  callbackFn => element
output: undefined

**====  reduce  ====*
input:  elem, elem
output: result

**====  sort  ====*
input: elem elem
output: sorted arr

*/

/* // ========    начальный массив  filter
const anotherNumbersList = [5, 0, 8, 10, -4, 50, 220];

// input  : callback
// output : new arr

// input  : number, index(optional), array(optional)
// output : boolean

//BAD
// const filterResult = anotherNumbersList.filter(function (num) {
//   if (num > 10) {
//     return true;
//   }
//   return false;
// });

// GOOD
const filterResult = anotherNumbersList.filter((el, index, array) => {
	console.log('callback was called', num, index, array);
	return el > 10;
});

//test data
console.log(filterResult);
*/

// начальный массив
const numbersList = [5, 0, 8, 10, -4, 50, 220];

/* метод map */
/* const newArr = arr.map(callback) - создает и возвращает новый массив. Длина нового и исходного массивов равны
   ф-ция callback запустится по очереди для каждого элемента начального массива arr
   элементы массива newArr - это результат вызова callback для каждого элемента arr
   newArr[i] = callback(arr[i]) */

// c помощью метода map создай новый массив squaredNumbers, в котором будут квадраты чисел из numbersList
// выведи squaredNumbers в консоль

// input:  func, this(optional)
// output: arr

// callback
// input:  el, index(optional), array(optional)
// output: el

// BAD
// const mapRes = numbersList.map(el => {
// 	const res = el * el;
// 	return res;
// });

// GOOD
const mapRes = numbersList.map(el => el * el);
// const mapRes = numbersList.map(el => 'my number is' + el);
console.log(mapRes);

/* метод forEach */
/* arr.forEach(callback) - итерирует массив и выполняет callback функцию по очереди для каждого элемента
начального массива arr. callback функция ничего не должна возвращать */

// c помощью метода forEach выведи в консоль только положителные элементы массива numbersList

// input:  func, this(optional)
// output: arr

// callback
// input:  element
// output: undefined

numbersList.forEach(el => {
  if (el > 100) {
    console.log(el);
  }

  return el; // ignore
});

/* метод find */
/* const arrElement = arr.find(callback) - вернет первый элемент массива arr, который удовлетворяет условию в callback.
   ф-ция callback запустится по очереди для каждого элемента начального массива arr
   если callback(arr[i]) вернет true, то find прекратит поиск и вернет этот элемент */

// c помощью метода find найди первое нечетное число в numbersList и выведи его в консоль

// input:  callbackFn => true => element
// output: element or undefined

// callback
// input:   element
// output: boolean

// const numbersList = [5, 0, 8, 10, -4, 50, 220];

// BAD
// const findRes = numbersList.find(el => {
// 	if (el > 300) {
// 		return true;
// 	}
// 	return false;
// })

// GOOD
// const findRes = numbersList.find(el => el % 2 === 0);
console.log(numbersList.find(el => el % 2 === 0));

// wrong method
console.log(numbersList.filter(el => el % 2 === 0)[0]);

/* метод reduce */
/* const newArr = arr.reduce(callback) - применяет функцию callback к каждому элементу массива (слева-направо),
возвращая одно результирующее значение. Функция callback принимает два параметра - accumulator, currentValue */

// С помощью метода reduce посчитай сумму чисел массива transactions которые больше 100
// выведи в консоль результат выполнения, а так же массив transactions после выполнения reduce

const transactions = [5, 0, 8, 10, -4, 50, 220, 1203, 556, 41];

// put your code here
// **====  reduce  ====*
// input:  callback
// output: num

// callback
// input:  acc (elem), elem
// output: acc (result)

// BAD
// const sumRes = transactions.reduce((acc, el) => {
//   console.log('acc: ' + acc);
//   console.log('el: ' + el);

//   // acc += el;
//   return acc + el;
// });

// GOOD
const sumRes = transactions.reduce((acc, el) => acc + el);

console.log(sumRes);
