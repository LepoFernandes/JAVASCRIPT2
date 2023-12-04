//MÉTODO FOR EACH

let hitchedSpaceships = ["Deméter", "Darwin", "SuperNova", "Fenix", "Puller"]

hitchedSpaceships.forEach(function(currentSpaceship, index){
    console.log(`Nave ${currentSpaceship} \nIndice: ${index}`)
})

//MÉTODO MAP

let nameSpaceships = ["Deméter", "Darwin", "SuperNova", "Fenix", "Puller"]

let upcasedSpaceships = nameSpaceships.map(function(currentSpaceship){
   let upcased = currentSpaceship.toUpperCase()
   return upcased
})

console.log(upcasedSpaceships)

//MÉTODO FILTER

let theSpaceships = ["Deméter", "Darwin", "SuperNova", "Fenix", "Puller"]

let with7Chars = theSpaceships.filter(element => {return element.length >=7})

console.log(with7Chars)

//MÉTODO FIND

let Spaceships = ["Deméter", "Darwin", "SuperNova", "Fenix", "Puller"]

let with6Chars = Spaceships.find(element => {return element.length >=8})

console.log(with6Chars)

