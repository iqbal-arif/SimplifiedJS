
function print (outerVar){
    let c = 3
    return function innerFunction(inneVar){
        console.log(outerVar)
        console.log(inneVar)
        console.log(c)
    }
}

let a = print(1)
a(4)
console.log(a)
console.log(print(1))