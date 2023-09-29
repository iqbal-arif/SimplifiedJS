// 1. Anonymous Function
function sayHi(){
    console.log("Hello")
}

function sayMyName(){
    console.log("Arif Iqbal")
}

sayHi()
sayMyName()

// 2.Function with Argument

function sum(a,b){
    console.log(a+b)
}
sum(1,2)

// 2.1 Write function that prints the name of a person.

let person  = "Arif Iqbal"
function personName(person){
    console.log(person)
}
personName(person)

//2.2 Return function value and concatenate with a string

function printName(person){
    return person
}

let myName = printName("Arif Iqbal")

console.log(`Hello I am ${myName} !`)