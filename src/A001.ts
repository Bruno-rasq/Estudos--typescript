//-----------------------------------
// typescript: inference & annotation
//-----------------------------------

let nome = 'Bruno';  // por inferencia a variavel nome é do tipo string
let idade = 22; // inference: number 
let valor = 1.5; //number float

//obj:
let teste; // por inferencia a variavel teste é do tipo any
let teste2: any;


// Tipos de dados: number, string, boolean, void, any, int, float, [], {} etc...
let nome2: string = 'Yuri';
let idade2: number = 22;

console.log(typeof nome, nome, idade);
console.log(typeof nome2, nome2, idade);