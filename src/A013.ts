//-------------------------------------
// typescript: class Herança
//-------------------------------------

// classe pai
class Animal {

    especie: string
    genero: 'M' | 'F'
    fome: boolean

    constructor(esp: string, gen: 'M' | 'F', fome: boolean = false){
        this.especie = esp
        this.genero = gen
        this.fome = fome
    }

    alimentar(): void {
        let fome = this.fome ? false : false
        this.fome = fome
    }
}

// instancia
const coelho = new Animal('coelho', 'M')

// classe herdeira
class Pet extends Animal {

    nome: string
    nomeDono: string
    ID: string 

    constructor(nome: string, nomedono: string, esp: string, gen: 'M' | 'F', fome: boolean = false){

        super(esp, gen, fome) // referenciaa classe pai

        this.nome = nome
        this.nomeDono = nomedono
        this.ID = this.setId()

    }

    infoPet(): void {
        const pet = {
            nome: this.nome,
            dono: this.nomeDono,
            id: this.ID,

            mais: {
                especie: this.especie,
                genero: this.genero
            }
        }

        console.log(pet)
    }

    setId(){
        return  crypto.randomUUID()
    }
    
}

// instancia classe pet
const Osvaldo = new Pet('Osvaldo', 'Bruno', 'coelho', 'M', true)

Osvaldo.infoPet()
Osvaldo.alimentar()