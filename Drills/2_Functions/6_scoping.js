// Global Scope
// Cannot access local scope variable
{
    // Local Scope
    // It can access outer variable in global space if needed
    let a =1
    console.log(a)
}

{
    // Local Scope
    let a = 2
    console.log(a)
}

let a =3
console.log(a)