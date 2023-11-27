//  Short Circuit Evaluation

printTrue() || printFalse();
printTrue() && printFalse();

function printTrue() {
  console.log('true');
  return true;
}
function printFalse() {
  console.log('false');
  return false;
}

// Scenario for using ||

function printName(name) {
  name = name || 'Default';
  console.log(name);
}
printName();

//  Scenario for using &&

const person = {
  name: 'Arif',
  address: {
    street: 'main st',
  },
};

console.log(person.address.streets);

console.log(person && person.address && person.address.street);
