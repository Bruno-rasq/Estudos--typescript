//-----------------------------------
// typescript: union types
//-----------------------------------

let arr = []; // tipo any

let cursos: string[] = ['typescript', 'node', 'javascript'] // array de strings
cursos.push('PHP')

let valores: number[] = [100, 20, 5]
valores.push(34)

console.log(cursos)
console.log(valores)


let Union: number | string; // pode receber string ou number
Union = 'teste';
Union = 22;
///Union = true; // erro

console.log(Union)

let arrunion: (string | number | boolean)[] = ['a', 'b', 2, 3, true]
console.log(arrunion)

let arrAny: any[] = [] // array que recebe qualquer coisa