const btn = document.querySelector('[data-btn')

function printClick(){
    console.log("clicked")
}

btn.addEventListener("click",printClick)
btn.removeEventListener("click",()=>{
    console.log("Removed Clicked")
})