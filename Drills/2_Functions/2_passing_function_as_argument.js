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

// Re-writing the above code

printGreeting("This is Kyle again", function(variable){
    console.log(variable)
})

// Re-iterating with another example

function printName(name, callback) {
    callback("hello " + name);
} 
printName("Robert", function (variable) {
    console.log(variable);
} );

// The best way to understand what is going on when you call a function is to map each argument to its value. In this case the argument name is set to the value "Robert" since you call printName and pass "Robert" as the first value. The callback argument is then set to the function you define as the second argument to printName. This means when you call printName it will call the callback function (which in our case is just the function you passed to printName) and it will pass that function the text "hello " + name which in our case is just "hello Robert" since name is set to the value of Robert.

// This mapping is really easy to do if you just manually set the arguments of your function to the values you are calling the function with. As you can see I just took what we passed to printName and manually set the variables to those values so it is really easy to see exactly what is getting passed to each argument.
function printName() {
  const name = "Robert"
  const callback = function (variable) {
    console.log(variable)
  }
  
  callback("hello " + name)
}

// Another Example of Passing function as an Argument

function doStuff(a,b,name){
    print(sum(a,b))
    print(sayHi(name))
}

// This function just prints the results
let print = (printStuff) => console.log(printStuff)

// Sum funtion
let sum = (a,b) => a + b

// Greeting function
let sayHi = (name) => `Hi ${name}`

// Invokig a function
doStuff(3,3, "JavaScript")