//-------------------------------------
// typescript: class abstracte readonly
//-------------------------------------

abstract class Pessoa {

    readonly nome: string // depois de atrbuido não pode mudar

    constructor(nome: string){
        this.nome = nome
    }

    get display(): string {
        return this.nome
    }

    abstract find(name: string): Pessoa
}

class Empregado extends Pessoa {

    readonly code: number  // depois de atrbuido não pode mudar

    constructor(name: string, code: number){
        super(name)
        this.code = code
    }

    find(name: string): Pessoa {
        return new Empregado(name, 1)
    }
}

const Emp: Pessoa = new Empregado('steve', 223)
console.log(Emp.display)