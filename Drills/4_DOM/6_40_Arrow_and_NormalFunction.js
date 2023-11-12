const button = document.querySelector('button');
button.addEventListener('click', e => {
    console.log('Arrow This')
    console.log(this)
})

button.addEventListener('click', function(e){
    console.log('Function this')
    console.log(this)
})

console.log(this === window) //true;this is a window object