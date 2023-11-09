let nomenave = prompt("Digite abaixo o nome da sua espaçonave")
let novonome = ""

nomenave = nomenave.toUpperCase()

for(let i = nomenave.length - 1; i >= 0;i--){
    
    if(nomenave[i] === "E"){
        break
    }
    novonome += nomenave[i];
}

alert(`Nome original da nave: ${nomenave}\nNome modificado: ${novonome}`)