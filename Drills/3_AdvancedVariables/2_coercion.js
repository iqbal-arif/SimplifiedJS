// Data types
/*
number
string
boolean
null
undefined
*/

// String to number called as Explicit Type Coercion

let a  = "1"
// parseInt for integer
console.log(typeof parseInt(a))

let b = "1.3"
//  parseFloat for decimal number
console.log(typeof parseFloat(a))

// Number to String

let c = 1.34
console.log(typeof c.toString(c))

// Imlicit Type Coercion

let d =1
let e ="2"
let f = "Hello"
console.log(e+d)
console.log(e-d)
console.log(e+f)
console.log(f-e)
console.log(f-d)