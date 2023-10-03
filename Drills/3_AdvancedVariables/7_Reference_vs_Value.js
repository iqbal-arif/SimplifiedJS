let a = 10
let b = "Hi"
let c = a // same reference
c = c + 1 // same reference but adding hardcoded number to it
let d = [1,2] 
e = d // sharing same reference as d
e.push(3) // both d and e will change


console.log("a = " + a)
console.log("b = " + b)
console.log("b = " + c)