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
/*
<!DOCTYPE html>
<html>
<body>

<h1>The Console Object</h1>
<h2>The assert() Method</h2>
<p>Remember to open the console (Press F12) before you click "Run".</p>
*/
<script>
console.assert(document.getElementById("demo"), "You have no element with ID 'demo'");
</script>
