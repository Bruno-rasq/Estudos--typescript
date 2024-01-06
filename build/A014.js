"use strict";
class Conta {
    constructor(nome, saldo = 3000) {
        this.Nome = nome;
        this.Saldo = saldo;
    }
    depositar(valor) {
        this.Saldo += valor;
        console.log('Depósito concluido!');
    }
    get saldo() {
        return this.Saldo;
    }
    set saldo(valor) {
        this.Saldo = valor;
    }
}
const conta1 = new Conta('Bruno', 500);
console.log(conta1.saldo);
conta1.depositar(300);
conta1.Saldo = 2000;