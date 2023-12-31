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
// EventListener "CHANGED" takes input but does not store any place just informs that input has changed
input.addEventListener('change', ()=>{console.log("changed")})
// EventListener "INPUT" takes input and takes every character
input.addEventListener('input', e=>{console.log(e.target.value === '')})
const form = document.querySelector('[data-form]')

form.addEventListener('submit', e => {
    // Prevent the default behaviour

    e.preventDefault()
    console.log("submitted form")})

const pageAnchor = document.querySelector('[data-anchor')

pageAnchor.addEventListener("click", e =>{
    e.preventDefault()
    console.log("Go to DUCKDUCKGO")
})

// mouseenter
// mouseleave
// mouseover
// focus works better with tab keys
// blur moves out of focus with tab keys

// Resize Window Event

window.addEventListener("resize", () => console.log("resized"))