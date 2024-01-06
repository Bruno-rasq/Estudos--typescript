//---------------------------------------
// typescript: generics
//---------------------------------------

function showNumber<T, U>( x: T, y: U ): U {

    return y
}

//console.log(showNumber<number, string>(5, '5'))
//console.log(showNumber<string, number>('5', 20))
//console.log(showNumber<boolean, boolean>(true, false))

class Teste<T> {

    public valor: T

    constructor(val: T){
        this.valor = val
    }

    public showValor() {
        console.log(this.valor)
    }
}

const valorClasse = new Teste<number>(20)
const valorClasse2 = new Teste<string>('00')

valorClasse.showValor()
valorClasse2.showValor()