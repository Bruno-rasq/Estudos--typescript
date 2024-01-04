//-------------------------------------
// typescript: class Herança
//-------------------------------------

// classe pai
class Animal {

    especie: string
    genero: 'M' | 'F'
    fome: boolean

    constructor(esp: string, gem: 'M' | 'F', fome: boolean = false){
        this.especie = esp
        this.genero = gem
        this.fome = fome
    }

    alimentar(){
        let fome = this.fome ? false : false
        this.fome = fome
    }
}

// instancia
const coelho = new Animal('coelho', 'M')


// classe herdeira
class Pet extends Animal {

    
}

const Osvaldo = new Pet('coelho', 'M')