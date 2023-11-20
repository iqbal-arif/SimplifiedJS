const button = document.querySelector('button');
button.addEventListener('click', e => {
    console.log('Arrow This')
    console.log(this)
})

button.addEventListener('click', function(e){
    console.log('Function this')
    console.log(this)
    // Use e.target instead of this to be exact as arrow function
    console.log(e.target)
})

console.log(this === window) //true;this is a window object