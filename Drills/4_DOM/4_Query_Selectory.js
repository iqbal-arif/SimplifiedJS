// Query Selector select one element
// Select any element that has data-test as an attribute
const dataAttributeElement = document.querySelector('[data-test')

console.log(dataAttributeElement)

// Applying Style to dataAttirbuteElement
dataAttributeElement.style.color = "green"
// Selecting the first element in class attribute
const divWithClasses = document.querySelector('.div-class')

//  Selecting Array of class through QuerySelectorAll 
const divWithClassesAll = document.querySelectorAll(".div-class")

// Apply style to all Node elements that are listed in array form

divWithClassesAll.forEach(div => (div.style.color = "red"))
console.log(divWithClassesAll)

// divWithClassesAll.map DOES NOT WORK since it is not considered as an array functoin
// Therefore convert it to an array

const divWithClassesAllToArray = Array.from(divWithClassesAll)

divWithClassesAllToArray.map(div => div.style.color = "purple")

// Selecting Input Element
const input = document.querySelector("input")

// Selecting Input Element with type Text
const inputTyeText = document.querySelector("input[type='text']")

// Selecting Input Element with type Text
const inputTyeTextInBodytag = document.querySelector("body > input[type='text']")