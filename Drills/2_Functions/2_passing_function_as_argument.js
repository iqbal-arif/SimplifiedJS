// 1. Passing function as an Argument

function printVariable(variable){
    console.log(variable)
}

console.log(printVariable)
// Another function that takes printVariable as a function argument

function func(x){
    x("This string initiated throgh printVariable function passed as variable")
}

// Calling the func with other function as a variable
func(printVariable)

// Calling callback function of sumCallback() wth the result of a, b

function sumCallback(a,b, callback){
    callback(a+b)
}

function handleSum(sum){
    console.log(sum)
}

sumCallback(1,2,handleSum)

// Function that prints "Hello Kyle" after calling greeting function with name variable

function greetingYou(name, myGreetings){
    myGreetings(`Hello ${name}`)
}

function hello(myGreetings){
    console.log(myGreetings)
}

greetingYou("Kyle", hello)

// Teacher Solution

function printGreeting(greeting){
    console.log(greeting)
}

function printName(name, callback){
    // using callback to print Hello with name
    callback("hello " + name)
}

printGreeting("Master Kyle", printGreeting)