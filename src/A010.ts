//-------------------------------------------------
// typescript: functions params: default & optional
//-------------------------------------------------

//parametros padrões
function SumTwoNumber(n1: number = 0, n2: number = 0): number {
    return n1 + n2
}

console.log(SumTwoNumber(5, 5)) // n1 = 5, n2 = 5
console.log(SumTwoNumber(6)) // n1 = 6, n2 = 0
console.log(SumTwoNumber()) // n1 = 0, n2 = 0

// parametro opicional
function newUser(user: string, pass: string | number, nome?: string): void {

    let obj = {
        user,
        pass,
        nome 
    }

    console.log(obj)
}

newUser('admin', 3337, 'jonas')
newUser('admin', 5000)