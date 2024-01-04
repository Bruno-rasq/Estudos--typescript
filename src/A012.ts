//-------------------------------------
// typescript: class
//-------------------------------------

class Computador {

    public PC_name: string
    private ram: number
    private cpu: number
    protected isOn: boolean

    constructor(PC_nome: string, ram:number, cpu:number, isOn:boolean = false){
        this.PC_name = PC_nome
        this.ram= ram
        this.cpu = cpu
        this.isOn = isOn
    }

    ON_Off(){
        let on = this.isOn ? false : true
        this.isOn = on
        console.log(this.isOn? 'On' : 'off')
    }

    info(): void {
        let PC = {nome: this.PC_name, ram: this.ram, cpu: this.cpu, ON_OFF: this.isOn? 'On' : 'off'}
        console.log( PC )
    
    }

    upgradeRAM(qnt: number): void{
        if(qnt >= 0 && qnt <= 1000){
            this.ram += qnt
        } else {
            console.log(` Valor ${qnt} inválido!`)
        }
    }

}


//instanciando as classes
const PC1 = new Computador('windows', 64, 10)
const PC2 = new Computador('linux', 128, 10)
const PC3 = new Computador('mac', 32, 5, true)

PC1.ON_Off()
PC1.info()
PC2.info()
PC3.info()

// propriedades privadas
// PC1.info = true
// console.log(PC1.isOn)

PC2.ON_Off()
PC2.info()
PC2.ON_Off()
PC2.info()