//-----------------------------------
// typescript: array only read
//-----------------------------------

// formas válidas de se declarara um array
let numeros:  number[] = [10, 5, 2, 1];
let numeros2: Array<number> = [10, 5, 2, 1];
let numeros3: Array<number | string> = ['a', 'b', 3, 10];
let numeros4: (number | string)[] = [];


numeros.push(19)
numeros.unshift()

console.log(numeros)


// array somente de leitura
let numeros_RO: ReadonlyArray<number> = [10, 15, 20]; // descarta todos os metodos que modificam um array

console.log(numeros_RO)