let nomenave = prompt("Por favor digite o nome da sua espaçonave:")
let novonome = ""
let letra = prompt("Qual letra do nome você deseja substituir?")
let letrasubs = prompt(`Por qual letra você deseja substituir a letra ${letra}`)

nomenave = nomenave.toUpperCase()
letra = letra.toUpperCase()
letrasubs = letrasubs.toUpperCase()

for(let i = 0; i < nomenave.length; i++ ){
    if(nomenave[i] == letra){
        novonome += letrasubs
    } else {
        novonome += nomenave[i]
    }
}

alert(`O novo nome da sua nave agora é ${novonome}`)