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