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