"use strict";
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
    get display() {
        return this.nome;
    }
}
class Empregado extends Pessoa {
    constructor(name, code) {
        super(name);
        this.code = code;
    }
    find(name) {
        return new Empregado(name, 1);
    }
}
const Emp = new Empregado('steve', 223);
console.log(Emp.display);