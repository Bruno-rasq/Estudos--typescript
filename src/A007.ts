//-------------------------------------
// typescript: null, undefined, unknown
//-------------------------------------

let nome_null: string; // null
nome_null = 'Bruno'
console.log(typeof nome_null)

let Nullvalor: null = null;

let undefindeValor: any; // o tipo é any porem o valor é indefinido


// null: conhece - vazio
// undefind: desconhece - vazio
// unknown : desconhece - cheio

let unknownValor: unknown = 10;
// let valor: number = unkwonValor unknownValor possue um numero mas não é do tipo numero
console.log(unknownValor)