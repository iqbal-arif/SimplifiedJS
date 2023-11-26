const person ={
    name ="Arif",
    friend :{
        name: 'Joey',
        friend : {
            name: 'Iqbal'
        }
    }
}

let firstPerson =person

while (firstPerson != null){
    console.log(firstPerson.name)
    firstPerson = firstPerson.friend
}