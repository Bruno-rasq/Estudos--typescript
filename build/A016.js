"use strict";
let C1 = { nome: 'typescript', derscricao: 'curso de typescript', quantidadeAulas: 100, maxAlunos: 40 };
let C2 = { nome: 'javascript', derscricao: 'curso de javascript', quantidadeAulas: 200,
    iniciarCurso(teste) {
        console.log(teste);
    }
};
let C3 = {
    nome: 'Node.js',
    derscricao: 'curso de Node.js',
    quantidadeAulas: 100,
    maxAlunos: 50
};
console.log(C1);
console.log(C2);
class Curso {
    constructor(nome, des, qntAulas) {
        this.nome = nome;
        this.derscricao = des;
        this.quantidadeAulas = qntAulas;
    }
    iniciarCurso(test) {
        console.log(test);
    }
}
let C4 = new Curso('java', 'curso de java', 100);
C4.iniciarCurso(`iniciando curso de ${C4.nome}`);