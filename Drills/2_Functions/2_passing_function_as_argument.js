// 1. Passing function as an Argument

function printVariable(variable){
    console.log(variable)
}

console.log(printVariable)
// Another function that takes printVariable as a function argument

function func(x){
    x("This string initiated throgh printVariable function passed as variable")
}

// Calling the func with other function as a variable
func(printVariable)

// Calling callback function of sumCallback() wth the result of a, b

function sumCallback(a,b, callback){
    callback(a+b)
}

function handleSum(sum){
    console.log(sum)
}

sumCallback(1,2,handleSum)