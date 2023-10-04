function createUser (name, age){
    return { name: name, age: age, human:true}
}

const userFunction = createUser("Arif", 45)
console.log(userFunction)

// User creating function

function User(name,age){
    this.name = name
    this.age = age
    this.human = true
}

const user = new User("Sally", 23)
console.log(user)

// Class Method for User Creation
class User {
    constructor(name,age){
        this.name = name
        this.age = age
        this.human = true
    }
}

const employee = new User("Kyle", 27)
console.log(employee)