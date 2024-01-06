"use strict";
class Animal {
    constructor(esp, gen) {
        this.especie = esp;
        this.genero = gen;
        this.nivelFome = this.setNivelDefome();
        this.estaVivo = true;
        this.ID = this.setId();
        this.loop = this.atualizarFome();
    }
    setId() {
        return crypto.randomUUID();
    }
    setNivelDefome() {
        return Number((Math.random() * 100).toFixed(0));
    }
    infoAnimal() {
        let obj = {
            id: this.ID,
            especie: this.especie,
            genero: this.genero,
            nivel_de_fome: this.nivelFome,
            status: this.estaVivo
        };
        return obj;
    }
    atualizarFome() {
        return setInterval(() => {
            this.nivelFome -= 5;
            console.log(`nivel de fomo: ${this.nivelFome}%`);
            if (this.nivelFome <= 30)
                console.log('Animal com fome');
            if (this.nivelFome <= 0)
                this.animalMorto();
        }, 10000);
    }
    alimentar() {
        if (this.nivelFome <= 100 && this.nivelFome > 0) {
            this.nivelFome += 50;
            console.log(`hmmmmm.. Delicia!`);
            console.log(`nivel de fomo: ${this.nivelFome}%`);
        }
    }
    animalMorto() {
        console.log(`${this.especie} está morto!`);
        this.estaVivo = false;
        clearInterval(this.loop);
        console.log(this.infoAnimal());
    }
}
const coelho = new Animal('coelho', 'M');
class Pet extends Animal {
    constructor(esp, gen, nome, dono) {
        super(esp, gen);
        this.Nome = nome;
        this.NomeDono = dono;
    }
    carinho() {
        console.log(`Você fez carinho em ${this.Nome}`);
    }
    infoPet() {
        const obj = {
            Nome: this.Nome,
            Dono: this.NomeDono,
            Id: this.ID
        };
        console.log(obj);
    }
}
const Osvaldo = new Pet('coelho', 'M', 'Osvaldo', 'Bruno');
console.log(Osvaldo.infoAnimal());
console.log(Osvaldo.infoPet());
console.log(Osvaldo.carinho());