"use strict";
class Computador {
    constructor(PC_nome, ram, cpu, isOn = false) {
        this.PC_name = PC_nome;
        this.ram = ram;
        this.cpu = cpu;
        this.isOn = isOn;
    }
    ON_Off() {
        let on = this.isOn ? false : true;
        this.isOn = on;
        console.log(this.isOn ? 'On' : 'off');
    }
    info() {
        let PC = { nome: this.PC_name, ram: this.ram, cpu: this.cpu, ON_OFF: this.isOn ? 'On' : 'off' };
        console.log(PC);
    }
}
const PC1 = new Computador('windows', 64, 10);
const PC2 = new Computador('linux', 128, 10);
const PC3 = new Computador('mac', 32, 5, true);
PC1.ON_Off();
PC1.info()
PC2.info()
PC3.info()
console.log(PC1.isOn)
PC2.ON_Off()
PC2.info()
PC2.ON_Off()
PC2.info();