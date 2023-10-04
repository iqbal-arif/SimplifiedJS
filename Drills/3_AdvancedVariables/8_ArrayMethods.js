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

// every method; if all the number match to be true

const isEveryTrue = a.every(number => number > 4)
console.log(isEveryTrue)

// reduce method

const sumNumber = a.reduce((sum,number) => {
    return sum + number
},0)

console.log(sumNumber)

// Another examplex of reduce
// Drill
const items = [
    {price:10},
    {price:20},
    {price:14},
    {price:1},
    {price:6},
]
// map lists each item individually
const value = items.map(item => item)
console.log(value)

//  forEach lists each item one by one
const itemTotal = items.forEach((element, index, array) => {
	console.log(element.price);
});

// reduce sums all the values to a single number
const sumItem = items.reduce((sum,value) => {
    return sum + value.price
},0)

console.log(sumItem)




// Another example of Array of Objects value retrival
// Method One through forEach & for in
const Teachers = [
	{
		name: 'saritha',
		subject: 'Maths'
	},
	{
		name: 'ahim',
		subject: 'science'
	},
	{
		name: 'sneha',
		subject: 'Social'
	}]

Teachers.forEach(teacher => {
	for (let value in teacher) {
		console.log(`${teacher[value]}`)
	}
})

// Another example of Array of Objects value retrival
// Method Two through forEach with object.value method
const arr = [{ x:1 }, { x: 2 }, { x: 3 }];

arr.forEach((element, index, array) => {
	console.log(element.x);
});


// includes method to get boolean value

const valueIncluded = [1,2,3,4,5,6,7]

const isValueIncluded = valueIncluded.includes(5)
console.log(isValueIncluded)