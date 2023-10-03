const a = 0
const b = false
console.log(a == b) //true

// Comparison with implicit type coercion use ===

const c = 1
const d ="1"

console.log(c===d)

// with == it will be true
console.log(c==d)

// null and undefined are same so use ==
e = null
f = undefined

console.log(e==f) //true
console.log(e===f) //false
