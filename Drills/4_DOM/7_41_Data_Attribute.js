const test = document.querySelector('[data-test]');
// Gives the data
test.dataset;
console.log(test.dataset);

// Accessing each data set separately

console.log(test.dataset.test); // 1234
console.log(test.dataset.testTwo); // test-2

// dataset can be used to set values

test.dataset.test = 'A value injected through JS code';

// Counting and Storing the Button Clicks through DataSet

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    // Counting & Storing Clicks of each Individual button
    // Used pasrsInt to convert string to integer for counting
    const currentClicks = parseInt(button.dataset.clicks);
    button.dataset.clicks = currentClicks + 1;
  });
});
