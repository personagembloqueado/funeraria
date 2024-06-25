console.log('bem vindo ao funerária Santa Luzia sua morte nossa alegria !!!')

const readline = require ('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let mortos = []
let vivos = []
exibirMenu()

function exibirMenu(){
    console.log(`
    1. Registrar 
    2. Agendar
    3. Listar
    4. Editar
    5. Editar ag 
    6. Remover
    7. Sair
     
    `)
    rl.question(`Escolha uma opção:`, (opcao) => {
        switch(opcao){
            case '1':
                registrar()
                break;
            case '2':
                agendar()
                break;
            case'3':
                listar()
                break;
            case'4':
                editar()
                break;
            case'5':
                editarag()
                break;    
            case'6':
              remover()
              break;
            case'7':
                rl.close()
                break;
            default: 
            console.log('opção inválida')
              exibirMenu()
              break;

        }
    })
}

function registrar(){
    rl.question('Digite o nome: ', (nomemorto) => {
        rl.question('Digite a idade: ', (idademorto) => {
            rl.question('Digite a altura: ', (alturamorto) => {
                vivos.push({nomemorto: nomemorto, idademorto: idademorto, alturamorto: alturamorto})
                console.log('Morto registrado com sucesso. ')
                exibirMenu()
            })
        })
    })
}

function agendar(){
    rl.question('Digite o dia e local do velório: ', (veloriodia) => {
        rl.question('Digite o horário do velório: ', (veloriohora) => {
            rl.question('Digite o dia e local do enterro: ', (enterrodia) => {
                rl.question('Digite o horário do enterro: ', (enterrohora) => {
                 mortos.push({veloriodia: veloriodia, veloriohora: veloriohora, enterrodia: enterrodia, enterrohora: enterrohora})
                    console.log('Agendado com sucesso. ')
                    exibirMenu()
                })
            })
        })
    })
} 
function listar() {
   if(vivos.length > 0){
     for (let i = 0; i < vivos.length; i++)
        console.log(vivos[i])
        exibirMenu()
    }else{
        console.log(`Nenhum registro`)
        exibirMenu()
    }
} 

function remover(){
   if(vivos.length == 0){
    console.log('Nada registrado.')
    exibirMenu()
   }else{
    console.log('Lista de mortos')
    vivos.forEach((vivos, index) => {
     console.log(`${index + 1}. ${vivos.nomemorto}`)
    })
    rl.question('Digite a opção que deseja remover:', (opcao) => {
        if(opcao > 0 && opcao <= vivos.length) {
            vivos.splice(opcao -1, 1)
            console.log('Removido com sucesso')
            exibirMenu()        
        }else{
            console.log('Opção inválida, tente novamente.')
            exibirMenu()
        }
    })
   }
}

function editar(){
    if(vivos.length == 0) {
        console.log('Nada registrado. ')
        exibirMenu()
    } else {
        rl.question('Digite a opção que você quer editar: ', (opcao) => {
            if (opcao > 0 && opcao <= vivos.length) {
                rl.question('Digite o novo nome: ', (nomemorto) => {
                    rl.question('Digite a nova idade: ', (idademorto) => {
                        rl.question('Digite a nova altura: ', (alturamorto) => {
                            vivos[opcao - 1] = {
                                nomemorto,
                                idademorto,
                                alturamorto
                            }
                            console.log('Editado com sucesso. ')
                            exibirMenu()
                        })
                    })
                })
            }
        })
    }
}

function editarag() {
    if(mortos.length == 0) {
        console.log('Nada registrado. ')
        exibirMenu()
    } else {
        rl.question('Digite a opção que você quer editar: ', (opcao) => {
            if(opcao > 0 && opcao <= mortos.length) {
                rl.question('digite o novo dia e local do velório: ', (veloriodia) => {
                    rl.question('Digite o novo horário do velório: ', (veloriohora) => {
                        rl.question('Digite o novo dia e local do enterro: ', (enterrodia) => {
                            rl.question('Digite o novo horário do enterro: ', (enterrohora) => {
                                mortos[opcao - 1] = {
                                    veloriodia,
                                    veloriohora,
                                    enterrodia,
                                    enterrohora
                                }
                                console.log('Editado com sucesso. ')
                                exibirMenu()
                            })
                        })
                    })
                })
            }
        })
    }
}