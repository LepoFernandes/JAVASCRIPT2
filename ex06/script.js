alert("Vamos converter distâncias.")

let distanciaAl = prompt("Qual a distância em anos luz?")
let pc = 0.306601
let au = 63241.1
let km = 9.5 * Math.pow(10 , 12)
let escolha = prompt("Você quer converter para qual distância?\n1-Parsec(pc)\n2-Unidade astronômica(AU)\n3-Quilômetros(km)")

let resultado;

switch(escolha){
    case "1":
        resultado = distanciaAl * pc
        alert(`Distância em anos-luz: ${distanciaAl}\nConversão desejada: Parsec\nResultado = ${resultado}pc`) 
    break
    case "2":
        resultado = distanciaAl * au 
        alert(`Distância em anos-luz: ${distanciaAl}\nConversão desejada: Unidade astronômica\nResultado = ${resultado}au`)
    break
    case "3":
        resultado = distanciaAl * km
        alert(`Distância em anos-luz: ${distanciaAl}\nConversão desejada: Quilômetros\nResultado = ${resultado}km`)
        break
    default:
        alert("Opção inválida!")
}

