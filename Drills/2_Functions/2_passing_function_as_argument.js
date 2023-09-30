// 1. Passing function as an Argument

function printVariable(variable){
    console.log(variable)
}

// Another function that takes printVariable as a function argument

function func(x){
    x("This string will initiate printVariable function")
}
console.log(printVariable)