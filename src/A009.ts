//-------------------------------------
// typescript: functions
//-------------------------------------

// declaração - nome(parametros) - :tipo de retorno
function doSomething(): void {
    console.log('Hello')
}

doSomething()
doSomething()
doSomething()

const log = (valor: any): void => {
    console.log(valor)
}

// parametros devem se declarar os tipos
function userLog(user: string, password: number): void {

    let obj = {
        name: user,
        password: password
    }
    console.log(obj)
}

userLog('bruno', 2024)


const sum = (n1: number, n2: number): number => {
    return n1 + n2
}

log(sum(2, 5))
log(sum(20, 5).toString())
log('hola log')
log(true)

const somethig = function(): void {
    console.log('Something...')
}

doSomething();


// função de chamada imediata
(function(){
    console.log('welcome to console')
})()