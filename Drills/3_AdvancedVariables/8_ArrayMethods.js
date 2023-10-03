const a = [1,2,3,4,5]

// forEach 
a.forEach((element, index) => {
    console.log(element + " " + index)
});

// map
const newA = a.map(element =>{
    return element *2
})

console.log(newA)

// filter
const filteredArray = a.filter(number => number > 2)
console.log(filteredArray)

// find the first number in array
const findNumberinArray = a.find(number => number > 2)

console.log(findNumberinArray)

// some method; at least one number must match to be true
const isTrue = a.some(number => number > 3)
console.log(isTrue)
