"use strict";
class Animal {
    constructor(esp, gen, fome = false) {
        this.especie = esp;
        this.genero = gen;
        this.fome = fome;
    }
    alimentar() {
        let fome = this.fome ? false : false;
        this.fome = fome;
    }
}
const coelho = new Animal('coelho', 'M');
class Pet extends Animal {
    constructor(nome, nomedono, esp, gen, fome = false) {
        super(esp, gen, fome); 
        this.nome = nome;
        this.nomeDono = nomedono;
        this.ID = this.setId();
    }
    infoPet() {
        const pet = {
            nome: this.nome,
            dono: this.nomeDono,
            id: this.ID,
            mais: {
                especie: this.especie,
                genero: this.genero
            }
        };
        console.log(pet);
    }
    setId() {
        return crypto.randomUUID();
    }
}
const Osvaldo = new Pet('Osvaldo', 'Bruno', 'coelho', 'M', true);
Osvaldo.infoPet();
Osvaldo.alimentar();