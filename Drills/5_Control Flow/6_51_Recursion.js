// Function that calls itself
const item = ['sense.', 'make', 'all', 'will', 'This'];
function reverseArray(item) {
  //   for (let i = 0; i < item.length; i++) console.log(item[i]);
  for (let i = item.length - 1; i >= 0; i--) console.log item[i];
}

console.log(reverseArray(['sense.', 'make', 'all', 'will', 'This']));
