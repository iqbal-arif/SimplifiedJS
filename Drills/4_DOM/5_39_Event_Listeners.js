const btn = document.querySelector('[data-btn')

function printClick(){
    console.log("clicked")
}

btn.addEventListener("click",()=>{
    console.log("Clicked")
})
btn.removeEventListener("click",()=>{
    console.log("Removed Clicked")
})