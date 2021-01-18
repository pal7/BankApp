/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// console.log(23 === 23.0);
// console.log(0.1 + 0.2 === 0.3);

// type coercion
// console.log(Number(23));
// console.log(+'23');

//Parsing
// console.log(Number.parseInt('30px', 10));
// console.log(Number.parseInt('xe24', 10)); // NaN
// console.log(Number.parseInt('2.5rem')); // NaN
// console.log(Number.parseFloat('2.5rem')); // NaN

//isNaN check
// console.log(Number.isNaN(20));
// console.log(Number.isNaN('20'));
// console.log(Number.isNaN(+'20X'));
// console.log(Number.isNaN('20X'));
// console.log(Number.isNaN(20 / 0));

//checks if value is number
// console.log(Number.isFinite(20));
// console.log(Number.isFinite('20'));
// console.log(Number.isFinite(+'20X'));
// console.log(Number.isFinite(23 / 0));

//isInteger for checking if number is integer

// console.log(Number.isInteger(23));
// console.log(Number.isInteger(23.0));
// console.log(Number.isInteger(23 / 0));

//dice roll
// console.log(Math.trunc(Math.random() * 6) + 1);

// //random # bw max and min
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min) + 1) + min;
// console.log(randomInt(10, 20));

// console.log(Math.floor(-42.3));
// console.log(Math.trunc(-42.3));

// console.log((2.345).toFixed(2));
// console.log(+(2.345).toFixed(2));

// labelBalance.addEventListener('click', function () {
//   [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
//     if (i % 2 === 0) row.style.backgroundColor = 'blue';
//   });
// });

//bigInt

// console.log(2 ** 53 - 1);
// console.log(2 ** 53);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(2 ** 53 + 1);

// const bigB = 7000000000000123254543589176111382n;
// console.log(bigB);
// console.log(BigInt(70000000000123));

// //some exceptions
// console.log(20n > 7);
// console.log(20n < 7);
// console.log(typeof 20n);
// console.log(20n === '20');
// console.log(20n === 20);
// console.log(20n == 20);
// console.log(20n == '20');

// console.log(11n / 3n);
// console.log(11 / 3);

//dates
// const now = new Date();
// console.log(now);

// console.log(new Date(account1.movementsDates[0]));
// console.log(new Date(2022, 0, 12, 15, 23, 7));

// console.log(new Date(2037, 10, 42));

// console.log(new Date(0));
// console.log(new Date(3.334 * 24 * 60 * 60 * 1000)); //ms

//working with dates
//
// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);
// console.log(+future);
//same as
// console.log(Number(future));

//operations with dates
// const calcDaysPassed = (date1, date2) =>
//   Math.abs(date1 - date2) / (1000 * 60 * 60 * 24);
// const days1 = calcDaysPassed(
//   new Date(2037, 3, 14),
//   new Date(2037, 4, 4, 10, 8, 40)
// );
// console.log(days1);
// console.log();

/* const num = 43242384923.23;

const options = {
  style: 'currency', // unit/percent/currency
  unit: 'celsius',
  currency: 'EUR',
};

console.log('US: ', new Intl.NumberFormat('en-US', options).format(num));
console.log('CA: ', new Intl.NumberFormat('en-CA', options).format(num));
console.log('Germany: ', new Intl.NumberFormat('de-DE', options).format(num));
console.log('Syria: ', new Intl.NumberFormat('ar-SY', options).format(num));
console.log('India: ', new Intl.NumberFormat('ta-IN', options).format(num));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(num)
); */

//async javascript

/* const ingredients = ['olives', 'baby spinach', 'artichokes', 'chilli flakes'];
const pizzaTimer = setTimeout(
  (ing1, ing2, ing3) =>
    console.log(`Here is your Pizza 🍕 with ${ing1}, ${ing2} and ${ing3}`),
  3000,
  ...ingredients
  //callback function is the first argument for setTimeOut function after the second argument passes (in ms), 3rd and next arguments are the paramters of the function (ing1, ing2) in order
);
console.log('Waiting ...');

if (ingredients.includes('baby spinach')) clearTimeout(pizzaTimer);

setInterval
setInterval(() => {
  const now = new Date();
  const hour = `${now.getHours()}`.padStart(2, 0);
  const min = `${now.getMinutes()}`.padStart(2, 0);
  const sec = `${now.getSeconds()}`.padStart(2, 0);
  console.log(`${hour}:${min}:${sec}`);
}, 1000);
*/

// setInterval
// setInterval(function () {
//   const now = new Date();
//   console.log(now);
// }, 1000);
