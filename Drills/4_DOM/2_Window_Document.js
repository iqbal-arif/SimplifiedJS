console.log(window)

window.console.log("Hi again")

window.alert("A window object")

// Check window size
window.addEventListener("resize", ()=> console.log("resized"))

// Document Objects

console.log(document)
console.log(document.body)
console.log(document.documentElement)

const element = document.createElement("span")
element.innerHTML = "Hello World"
document.body.appendChild(element)