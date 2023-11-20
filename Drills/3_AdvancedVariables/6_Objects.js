let person = {
    name:"Arif",
    age:45,
    favoriteNumber:3,
    sayHi(){
        console.log("Hi")
    }
}
person.sayHi()
console.log(person.name)

const car ={
    make: "Toyota",
    model: "Avalon",
    isUsed: true,
    makeNoise(){
        console.log("Vroom")
    }
}

let employee = {
    name: "Kyle",
    hobbies: ["Weight Lifting", "Programing"],
    address:{
        street: "12334 street",
        city: "CityHome"
    }
}

console.log(employee.address.city)
console.log(employee.hobbies[1])

// Book Object
const book ={
    title: "The JavaScript",
    author: {
        name: "Master Kin",
        age: 27
    }
}

console.log(book)
console.log(book.author.name)
console.log(book)

book.author.name ="Jordan"
console.log(book.author.name)