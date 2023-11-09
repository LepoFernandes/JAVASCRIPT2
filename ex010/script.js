let nomeNave = prompt("Olá piloto, digite o nome da sua nave:")
let velocidadeI = 0
let aceleracao = 5
let escolha ;

while(escolha !== "4"){
    escolha = prompt("Escolha um dado a seguir para continuar:\n1-Acelerar a nave em 5km/s\n2-Desacelerar em 5km/s\n3-Exibir dados de bordo\n4-Encerrar processo")

    switch(escolha){
        case "1":
            acelerar()
        break
        case "2":
            desacelerar()
        break
        case "3":
            exibir()
        break
        case "4":
            encerrar()
        break
        default:
            alert("Opção Inválida!")
}
}

function acelerar(){
    let novaVel = velocidadeI + aceleracao
    alert(`Nova velocidade : ${novaVel}`)
    velocidadeI = novaVel
}

function desacelerar(){
    let novaVel = velocidadeI - aceleracao
    alert(`Nova velocidade: ${novaVel}`)
    velocidadeI = novaVel
}

function exibir(){
    alert(`Olá ${nomeNave}, sua velocidade atual é de ${velocidadeI}`)
}

function encerrar(){
    alert(`Obrigado por participar!`)
}