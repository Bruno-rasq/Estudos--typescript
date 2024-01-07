"use strict";
var veiculos;
(function (veiculos) {
    let Cores;
    (function (Cores) {
        Cores[Cores["Preto"] = 0] = "Preto";
        Cores[Cores["Branco"] = 1] = "Branco";
        Cores[Cores["vermelho"] = 2] = "vermelho";
        Cores[Cores["Amarelo"] = 3] = "Amarelo";
        Cores[Cores["Azul"] = 4] = "Azul";
        Cores[Cores["Prata"] = 5] = "Prata";
    })(Cores || (Cores = {}));
    class Carro {
        constructor(marca, motor, cor) {
            this.marca = marca;
            this.motor = motor;
            this.cor = Cores[cor];
        }
        ligar() {
            this.motor.ligar = true;
        }
        desligar() {
            this.motor.ligar = false;
        }
        get pegarCor() {
            return this.cor;
        }
        get pegarMarca() {
            return this.marca;
        }
        get estaLigado() {
            return (this.motor.OnOff ? 'ligado' : 'desligado');
        }
        get pegarPotencia() {
            return this.motor.pot;
        }
    }
    class CarroEsportivo extends Carro {
        constructor(nome, cor) {
            super(nome, new Motores.Motor(6, 500, new Motores.Turbo(200)), cor);
        }
    }
    veiculos.CarroEsportivo = CarroEsportivo;
    class CarroPopulqr extends Carro {
        constructor(nome, cor) {
            super(nome, new Motores.Motor(3, 100), cor);
        }
    }
    veiculos.CarroPopulqr = CarroPopulqr;
})(veiculos || (veiculos = {}));
var Motores;
(function (Motores) {
    class Turbo {
        constructor(pot) {
            this.TurboPot = pot;
        }
        get pot() {
            return this.TurboPot;
        }
    }
    Motores.Turbo = Turbo;
    class Motor {
        constructor(cilindro, pot, turbo) {
            this.ligado = false;
            this.cilindros = cilindro;
            this.potencia = pot + (turbo ? turbo.TurboPot : 0);
            this.Turbo = (turbo ? turbo.TurboPot : 0);
        }
        set ligar(ligado) {
            this.ligado = ligado;
        }
        get OnOff() {
            return this.ligado;
        }
        get pot() {
            return this.potencia;
        }
        turbo() {
            return (this.Turbo ? true : false);
        }
    }
    Motores.Motor = Motor;
})(Motores || (Motores = {}));
const C1 = new veiculos.CarroEsportivo('Ferrari', 0);
const C2 = new veiculos.CarroPopulqr('Trem', 1);
C1.ligar();
console.log(`Nome....: ${C1.pegarMarca}`);
console.log(`cor.....: ${C1.pegarCor}`);
console.log(`Potencia: ${C1.pegarPotencia}`);
console.log(`On/Off..: ${C1.estaLigado}`);
console.log('--------------------------------');
console.log(`Nome....: ${C2.pegarMarca}`);
console.log(`cor.....: ${C2.pegarCor}`);
console.log(`Potencia: ${C2.pegarPotencia}`);
console.log(`On/Off..: ${C2.estaLigado}`);
console.log('--------------------------------');