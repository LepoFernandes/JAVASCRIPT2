
let entradausuario = prompt("Digite a data de partida (formato: DD/MM/YYYY)")
let dataentrada = moment(entradausuario, "DD/MM/YYYY")
let today = moment()

let tempo = today - dataentrada

let escolha = prompt("Escolha como gostaria de receber os dados de duração da viagem.\n1-Segundos\n2-Minutos\n3-Horas\n4-Dias")

if(escolha == "1"){
    let segundos = Math.round(tempo / 1000)
    alert(`Tempo de viagem de ${segundos} segundos.`)
} else if(escolha == "2"){
    let minutos = Math.round(tempo /( 1000 * 60) )
    alert(`Tempo de viagem de ${minutos} minutos.`)
}else if(escolha == "3"){
    let horas = Math.round(tempo / (1000 * 60 * 60))
    alert(`Tempo de viagem de ${horas} horas`)
} else if(escolha == "4"){
    let dias = Math.round(tempo / (1000 * 60 * 60 * 24))
    alert(`Tempo de viagem de ${dias} dias.`)
} else {
    alert("Opção inválida.")
}