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
class Employee {
    constructor(name,age){
        this.name = name
        this.age = age
        this.human = true
    }
    printName(){
       return(this.name)
    }
}

const employee = new Employee("Kyle", 27)
console.log(employee)
employee.printName()

// Usecase

const date = new Date()
console.log(date.getDate())
console.log(date.getMonth())
console.log(date.getDay())