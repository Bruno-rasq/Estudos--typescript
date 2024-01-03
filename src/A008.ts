//-------------------------------------
// typescript: assertion & typecast
//-------------------------------------

// NOTA: o assertion type não funciona nas versões mais rescentes do tsc

let nvalor: number;
let svalor: string;
let uvalor: unknown;

uvalor=10;

// nvalor = uvalor; 
// --não é possivel fazer uma assosciação direta de um tipo unknown para number

//nvalor = <number>uvalor; // type Assertion
//svalor = <string>uvalor; // type Assertion
nvalor = Number(uvalor)
svalor = `${uvalor}` 

console.log(typeof uvalor) // number
console.log(uvalor)

console.log(typeof nvalor) // number
console.log(nvalor)

console.log(typeof svalor) 
console.log(svalor)


// ===== typecast =========

let strgValor: string;
let nmbValor: number;

strgValor = '20'
nmbValor = 10

// nmbValor = <string>strgValor; -- erro
//nmbValor = <number><unknown>strgValor; // convert a variavel primeiro para unknown

// nmbValor = Number.parseInt(strgValor)
//nmbValor = +strgValor

// strgValor = nmbValor.toString()
// strgValor = `${nmbValor}`