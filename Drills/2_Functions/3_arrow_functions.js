function sum(a,b){
    return a+b
}

// Arrow Function

let sumArrow = (a,b) => {
    return a + b
}

console.log(sumArrow(1,2))

// 1. Print Name

let printName = (name) => { return(name)}
console.log(printName("Arif"))

// 2. Arrow Function one liner
 let printHi = (name) => `Hi ${name}`
 console.log(printHi("JavaScript"))

//  3. Arrow function usage
function displayNum(x, callback){
    callback(x)
}

displayNum(10, function(number){
    console.log(number)
})

// Rewriting above as an Arrow function
displayNum(10, number => console.log(number))

// Display Name
displayName(Joe,  personName => console.log(personName))