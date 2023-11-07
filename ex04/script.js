let nomep = prompt("Olá piloto, qual seu nome?")
let velocidade = 0
let velocidade2 = prompt(`Estamos em ${velocidade}km/h para qual velocidade deseja acelerar a nave ${nomep}?`)
let confirmvel = confirm(`Essa é a velocidade desejada: ${velocidade2}km/h`)
alert("Acelerando nave...")

if(velocidade2 == 0){
    alert("Nave esta parada. Considere partir e aumentar a velocidade")
}else if (velocidade2 < 40){
    alert("Você esta devagar, podemos aumentar mais.")
} else if(velocidade2 >=40 && velocidade2 < 80){
    alert("Parece uma boa velocidade para manter.")
}else if(velocidade2 >= 80 && velocidade2 <= 100){
    alert("Velocidade alta. Considere desacelerar.")
}else{
    alert("Velocidade perigosa! Controle automático ativado.")
}

alert(`Resumo da viagem:\nNome do piloto: ${nomep}\nVelocidade da viagem: ${velocidade2}km/h`)
