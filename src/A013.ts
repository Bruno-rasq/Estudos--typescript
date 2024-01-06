//-------------------------------------
// typescript: class Herança
//-------------------------------------

// classe pai
class Animal {

    protected especie: string
    protected genero: 'M' | 'F'
    protected nivelFome: number
    protected estaVivo: boolean
    public ID: string
    private loop;

    constructor(esp: string, gen: 'M' | 'F'){

        this.especie = esp
        this.genero = gen
        this.nivelFome = this.setNivelDefome()
        this.estaVivo = true
        this.ID = this.setId()

        this.loop = this.atualizarFome()
       
    }

    private setId(): string {
        return  crypto.randomUUID()
    }

    private setNivelDefome(): number{
       return Number((Math.random() * 100).toFixed(0))
    }

    public infoAnimal() {

        let obj = {
            id: this.ID,
            especie: this.especie,
            genero: this.genero,
            nivel_de_fome: this.nivelFome, 
            status: this.estaVivo
        }

        return obj
    }

    private atualizarFome(){

       return setInterval(() => {

            this.nivelFome -= 5
            console.log(`nivel de fomo: ${this.nivelFome}%`)

            if(this.nivelFome <= 30) 
                console.log('Animal com fome')

            if(this.nivelFome <= 0) 
                this.animalMorto()
           
        }, 10000)
    }

    public alimentar(): void {
        if(this.nivelFome <= 100 && this.nivelFome > 0){
            this.nivelFome += 50

            console.log(`hmmmmm.. Delicia!`)
            console.log(`nivel de fomo: ${this.nivelFome}%`)
        }
    }

    private animalMorto() {
        console.log(`${this.especie} está morto!`)
        this.estaVivo = false
        clearInterval(this.loop)
        console.log(this.infoAnimal())
    }

}


// instancinado um animal
const coelho = new Animal('coelho', 'M')


//class filha
class Pet extends Animal {

    public Nome: string
    public NomeDono : string

    constructor(esp: string, gen: 'M' | 'F', nome: string, dono: string){

        super(esp, gen)

        this.Nome = nome
        this.NomeDono = dono
        
    }

    public carinho(): void {
        console.log(`Você fez carinho em ${this.Nome}`)
    }

    public infoPet(): void {

        const obj = {
            Nome: this.Nome,
            Dono: this.NomeDono,
            Id: this.ID
        }

        console.log(obj)
    }

}

const Osvaldo = new Pet('coelho', 'M', 'Osvaldo', 'Bruno')
console.log(Osvaldo.infoAnimal())
console.log(Osvaldo.infoPet())
console.log(Osvaldo.carinho())