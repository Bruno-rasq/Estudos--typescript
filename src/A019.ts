//---------------------------------------
// typescript: namespace
//---------------------------------------

namespace veiculos {

    enum Cores {
        'Preto',
        'Branco',
        'vermelho',
        'Amarelo',
        'Azul',
        'Prata'
    }

    abstract class Carro {

        private marca: string
        private motor: Motores.Motor
        private cor: string
        constructor(marca: string, motor: Motores.Motor, cor: Cores){
            
            this.marca = marca
            this.motor = motor
            this.cor = Cores[cor]
        }

        public ligar(){
            this.motor.ligar = true
        }

        public desligar(){
            this.motor.ligar = false
        }

        get pegarCor(){
            return this.cor
        }

        get pegarMarca(){
            return this.marca
        }

        get estaLigado(){
            return (this.motor.OnOff ? 'ligado' : 'desligado')
        }

        get pegarPotencia(){
            return this.motor.pot
        }
    }

    export class CarroEsportivo extends Carro {

        constructor(nome: string, cor: Cores){
            super(nome, new Motores.Motor(6, 500, new Motores.Turbo(200)), cor)
        }

    }

    export class CarroPopulqr extends Carro {

        constructor(nome: string, cor: Cores){
            super(nome, new Motores.Motor(3, 100), cor)
        }

    }
}

namespace Motores {

    export class Turbo {

        public TurboPot: number
        constructor(pot: number){
            this.TurboPot = pot
        }

        get pot(){
            return this.TurboPot
        }
    }

    export class Motor {

        private ligado: boolean
        private cilindros: number
        private potencia: number
        private Turbo: number
        
        constructor(cilindro: number, pot: number, turbo?: Turbo){

            this.ligado = false
            this.cilindros = cilindro
            this.potencia = pot + (turbo ? turbo.TurboPot : 0)
            this.Turbo = (turbo?turbo.TurboPot : 0)
        }

        set ligar(ligado: boolean){
            this.ligado = ligado
        }

        get OnOff(){
            return this.ligado
        }

        get pot(){
            return this.potencia
        }

        turbo(): boolean{
            return (this.Turbo ? true : false)
        }
    }
}

const C1 = new veiculos.CarroEsportivo('Ferrari', 0)
const C2 = new veiculos.CarroPopulqr('Trem', 1)

C1.ligar()

console.log(`Nome....: ${C1.pegarMarca}`)
console.log(`cor.....: ${C1.pegarCor}`)
console.log(`Potencia: ${C1.pegarPotencia}`)
console.log(`On/Off..: ${C1.estaLigado}`)
console.log('--------------------------------')

console.log(`Nome....: ${C2.pegarMarca}`)
console.log(`cor.....: ${C2.pegarCor}`)
console.log(`Potencia: ${C2.pegarPotencia}`)
console.log(`On/Off..: ${C2.estaLigado}`)
console.log('--------------------------------')