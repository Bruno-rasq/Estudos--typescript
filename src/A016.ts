//---------------------------------------
// typescript: objeto literal / inertface
//---------------------------------------

interface curso {

    nome: string
    derscricao: string
    quantidadeAulas: number
    maxAlunos?: number

}

let C1: curso = { nome: 'typescript', derscricao: 'curso de typescript', quantidadeAulas: 100, maxAlunos: 40 }
let C2: curso = { nome: 'javascript', derscricao: 'curso de javascript', quantidadeAulas: 200}

console.log(C1)
console.log(C2)