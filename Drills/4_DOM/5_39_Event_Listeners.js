const btn = document.querySelector('[data-btn')

function printClick(){
    console.log("clicked")
}

// Adding EVENTLISTENER Passing printClick reference to the function
btn.addEventListener("click",printClick)

// Removing EVENTLISTENER Passing printClick reference to the function
btn.removeEventListener("click",printClick)

// Event Object

// Accessing Event Object
btn.addEventListener("click", e => {console.log(e)})

// Selecting the data in input field
const input = document.querySelector('[data-input-text]')

input.addEventListener('change', ()=>{console.log("changed")})