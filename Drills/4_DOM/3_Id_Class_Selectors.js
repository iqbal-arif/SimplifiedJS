// Get Element By ID
const divWithID = (document.getElementById("div-id"))
console.log(divWithID)
divWithID.style.color = "red"


// Get Element by Class

const divWithClass = document.getElementsByClassName("div-class")

// Converting div class listing to an Array

const divWithClassArray = Array.from(divWithClass)

divWithClass.forEach(div.style.color="green");