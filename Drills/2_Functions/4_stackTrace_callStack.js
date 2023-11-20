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