let nomenav = prompt("Olá piloto, qual nome da sua nave?")
let escolha = prompt(`Seja bem-vindo(a), ${nomenav} reconhecida, deseja entrar na dobra espacial?\n1-Sim\n2-Não`)
let totaldedobras = 0
while(escolha === "1"){
    escolha = prompt("Deseja realizar a próxima dobra?\n1-Sim\n2-Não")
    totaldedobras++ 
} 

alert(`${nomenav} não entrou na dobra.\nTotal de dobras:${totaldedobras}\n`)