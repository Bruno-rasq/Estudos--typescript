//---------------------------------------
// typescript: objeto literal / inertface
//---------------------------------------

interface curso {

    nome: string
    derscricao: string
    quantidadeAulas: number
    maxAlunos?: number
    iniciarCurso?(test: string): void

}

interface cursoProgramacao extends curso {
    
    maxAulas?: number
    maxAlunos: number
}

let C1: curso = { nome: 'typescript', derscricao: 'curso de typescript', quantidadeAulas: 100, maxAlunos: 40 }
let C2: curso = { nome: 'javascript', derscricao: 'curso de javascript', quantidadeAulas: 200, 
    iniciarCurso(teste: string): void {
         console.log(teste)
    }
}

let C3: cursoProgramacao = {
    nome: 'Node.js', 
    derscricao: 'curso de Node.js', 
    quantidadeAulas: 100,
    maxAlunos: 50
}

console.log(C1)
console.log(C2)

class Curso implements curso {

    nome: string
    derscricao: string
    quantidadeAulas: number
    

    constructor(nome: string, des: string, qntAulas: number){
        this.nome = nome
        this.derscricao = des
        this.quantidadeAulas = qntAulas
    }

    iniciarCurso(test: string): void {
        console.log(test)
    }

}

let C4: Curso = new Curso('java', 'curso de java', 100)
C4.iniciarCurso(`iniciando curso de ${C4.nome}`)