const userIsLoggedIn = true;

if (userIsLoggedIn) {
  console.log('User Logged-in');
} else {
  console.log('Please login');
}
// Can use following conditions to be true to execute the code.
//1. Boolean : true or false
//2. Math operations: 2+1 === 3 ; this is true , so it runs the code
//3. Number Zero : Using number '0' as condition; this is false, so it does'nt run the code.
//4. Empty String: " "; this is also false, code does't run.
// 5. Null :  is also false
// 6. Undefined :  is also false

// Examples of Zero , Null, undefined

const totalPrice = 0;
// const totalPrice = null;
// const totalPrice = undefined;

if (totalPrice != null) {
  console.log('true');
} else {
  console.log('false');
}

// If & else If Practice

const ifArrayExample = ['this', 'is', 'an', 'Array'];
const arrayLength = ifArrayExample.length;

if (ifArrayExample === null) {
  console.log('Empty Array');
} else if (arrayLength < 5) {
  console.log('Small');
} else if (arrayLength < 10) {
  console.log('Medium');
} else {
  console.log('Large');
}
