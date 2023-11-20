let a = 10
let b = "Hi"
let c = a // same reference
c = c + 1 // same reference but adding hardcoded number to it
let d = [1,2] 
let f = [3,4,5] // new reference in memeory
e = d // sharing same reference as d
e.push(3) // both d and e will change

let h = {name: "JavaScript"} 
let i = h
h.name = "Fullstack JavaScript"
console.log("a = " + a)
console.log("b = " + b)
console.log("b = " + c)
console.log("h = " + h) //displays as an object convert them with JSON.stringify()
console.log("h = " + JSON.stringify(h)) //converting to string with JSON.stringify()
console.log("i = " + i)
console.log("i = " + JSON.stringify(i))

// Array comparison

let arrayA = [1,2]
let arrayB = [1,2]

console.log(arrayA === arrayB)

// Other example of Array referencing

const aB = [1,2] //0X01
const elemenToAdd = 3 // 3

add(aB, elemenToAdd) // 0x01, 3

console.log(aB)
console.log(elemenToAdd)

function add(array,element){
    element = element + 1 //4
    array.push(element) //0x01
}

const array = aB
array.push(4)