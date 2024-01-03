//-----------------------------------
// typescript: tuplas
//-----------------------------------

let things : (string | number)[] = ['a', 1, 'b', 2]

let tuple: [string, number] = ['bruno', 2024]

console.log(tuple)
console.log(tuple[0])


//let tuple: [string, number] = ['bruno', 2024, 2] erro pois foi especificado somento 2 valores, porem...
// tuple.push('a', 2) funciona mas esses elementos não poderam ser acessados

let tuple_RO: readonly[string, number] = ['b', 2024]

console.log(tuple_RO)