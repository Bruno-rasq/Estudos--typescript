//-------------------------------------
// typescript: RESt e Spread
//-------------------------------------


function Fsoma(...n: number[]): number {
    let soma: number = 0;
    n.forEach(num => soma += num)
    return soma
}

console.log(Fsoma(3, 5))