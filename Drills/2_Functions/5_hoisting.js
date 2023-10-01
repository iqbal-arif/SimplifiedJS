// Hoisting works with regurlar function
console.log(sum(3,4))

function sum (a,b){
    return a + b
}


// Hositing does not work with arrow function
// Because arrow function is defined with variable
// And variable are not hosited

console.log(sum(1,2))
let sum = (a,b) => a + b
