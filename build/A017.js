"use strict";
function showNumber(x, y) {
    return y;
}
class Teste {
    constructor(val) {
        this.valor = val;
    }
    showValor() {
        console.log(this.valor);
    }
}
const valorClasse = new Teste(20);
const valorClasse2 = new Teste('00');
valorClasse.showValor();
valorClasse2.showValor();