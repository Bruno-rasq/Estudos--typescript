"use strict";
class Animal {
    constructor(esp, gem, fome = false) {
        this.especie = esp;
        this.genero = gem;
        this.fome = fome;
    }
    alimentar() {
        let fome = this.fome ? false : false;
        this.fome = fome;
    }
}
const coelho = new Animal('coelho', 'M');
class Pet extends Animal {
}
const Osvaldo = new Pet('coelho', 'M');