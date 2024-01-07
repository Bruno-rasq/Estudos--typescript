//---------------------------------------
// typescript: desestruturação
//---------------------------------------


let array = [10, 20, 30, 40]
let [ A, B, C, D ] = array;
//let [ A, B, C, D ] = [10, 20, 30, 40];

console.log(A)
console.log(B)
console.log(C)
console.log(D)

let OBJ = {
    core1: 'verde',
    core2: 'Amarelo',
    core3: 'Azul',
    core4: 'Branco'
}

let { core1, core2, core3, core4 } = OBJ

console.log(core1)
console.log(core2)
console.log(core3)
console.log(core4)