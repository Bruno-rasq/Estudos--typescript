class Pessoa {
    constructor(n, a) {
        this.nome = n;
        this.altura = a;
    }
}
class Objeto {
    constructor(n) {
        this.nome = n;
    }
}
const Coisas = ['Bola', 'tesoura', 'livro', 'mochila'];
export default Coisas;
export { Pessoa, Objeto };