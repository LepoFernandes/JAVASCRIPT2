const hitchedSpaceships = [
    ["Fênix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]

let moreThen9 = hitchedSpaceships.filter(spaceship => {
    return spaceship[1] >9}).map(spaceship => {
        return spaceship[0]
    })

let onGoingHitchedPlataform = hitchedSpaceships.findIndex(spaceship =>{
    return spaceship[2] == false
})


let highLightedSpaceships = hitchedSpaceships.map(spaceship => {
    return spaceship[0].toUpperCase()
})


let message = `Espaçonaves com mais de 9 tripulantes ${moreThen9.join(",")}\nPlataforma com processo de engate ${onGoingHitchedPlataform + 1}\nEspaçonaves destacadas : ${highLightedSpaceships.join(",")}`

alert(message)
