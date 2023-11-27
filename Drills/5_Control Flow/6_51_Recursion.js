//Recursive Function
// Count down with for loop
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum = sum + i;
}

console.log(sum);

// Count down with Recursive

function sumNumbersBelow(number) {
  if (number <= 0) return 0;
  return number + sumNumbersBelow(number - 1);
}

console.log(sumNumbersBelow(10));

//Person Name Recursion

const person = {
  name: 'Arif',
  friend: {
    name: 'Joey',
    friend: {
      name: 'Iqbal',
    },
  },
};

let firstPerson = person;

while (firstPerson != null) {
  console.log(firstPerson.name);
  firstPerson = firstPerson.friend;
}

let currentPerson = person;
function printNames(currentPerson) {
  if (currentPerson == null) return;
  console.log(currentPerson.name);
  printNames(currentPerson.friend);
}
printNames(person);

/*https://www.programiz.com/javascript/recursion

Recursion is a process of calling itself. A function that calls itself is called a recursive function.

*/
// The syntax for recursive function is:
/*
function recurse() {
  // function code
  recurse();
  // function code
}

recurse();
*/
/*
Here, the recurse() function is a recursive function. It is calling itself inside the function.
Working of recursion in JavaScript

Once the condition is met, the function stops calling itself. This is called a base condition.

To prevent infinite recursion, you can use if...else statement (or similar approach) where one branch makes the recursive call, and the other doesn't.

So, it generally looks like this.
*/
/*
function recurse() {
  if (condition) {
    recurse();
  } else {
    // stop calling recurse()
  }
}

recurse();
*/
/*
A simple example of a recursive function would be to count down the value to 1.
*/

// Example 1: Print Numbers

// program to count down numbers to 1
function countDown(number) {
  // display the number
  console.log(number);

  // decrease the number value
  const newNumber = number - 1;

  // base case
  if (newNumber > 0) {
    countDown(newNumber);
  }
}

countDown(4);
/*
Output

4
3
2
1

In the above program, the user passes a number as an argument when calling a function.

In each iteration, the number value is decreased by 1 and function countDown() is called until the number is positive. Here, newNumber > 0 is the base condition.

This recursive call can be explained in the following steps:

countDown(4) prints 4 and calls countDown(3)
countDown(3) prints 3 and calls countDown(2)
countDown(2) prints 2 and calls countDown(1)
countDown(1) prints 1 and calls countDown(0)

When the number reaches 0, the base condition is met, and the function is not called anymore.

*/
