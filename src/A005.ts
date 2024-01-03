//-----------------------------------
// typescript: object
//-----------------------------------

//let dados = {}
let dados: object = {
    nome: 'Yuri',
    idade: 22,
    status: true
}

console.log(typeof dados)
console.log(dados)
//console.log(dados.nome) erro: 

let dados2 = {
    nome: 'Yuri',
    idade: 22,
    status: true,

    ola() {
        console.log('ola')
    },

    hello: () => console.log('hello'),
    info: (p: string) => console.log(p)
}

console.log(dados2.nome)
console.log(dados2.ola())
console.log(dados2.info('ativo'))
dados2.status = false