//-----------------------------------
// typescript: Getter e Setter
//-----------------------------------

class Conta {

    public Nome: string
    public Saldo: number

    constructor(nome: string, saldo: number = 3000){
        this.Nome = nome
        this.Saldo = saldo
    }

    public depositar(valor: number): void {
        this.Saldo += valor
        console.log('Depósito concluido!')
    }

    // GETTER
    get saldo(): number {
        return this.Saldo
    }

    // SETTER
    set saldo(valor: number) {
        this.Saldo = valor
    }
}

const conta1 = new Conta('Bruno', 500)

//console.log(conta1.saldo()) chamada do saldo sem o get
console.log(conta1.saldo) // chamado do saldo com o get

conta1.depositar(300) // deposito atravez do metodo
conta1.Saldo = 2000 // deposito atravez do set