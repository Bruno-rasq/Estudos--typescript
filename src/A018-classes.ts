class Pessoa {

    nome: string
    altura: number

    constructor(n: string, a: number){

        this.nome = n
        this.altura = a
    }
}

class Objeto {

    nome: string

    constructor(n: string){
        this.nome = n
    }
}

const Coisas = ['Bola', 'tesoura', 'livro', 'mochila']


export default Coisas
export { Pessoa, Objeto }