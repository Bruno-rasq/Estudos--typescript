//-----------------------------------
// typescript: ENUM
//-----------------------------------

enum dias {
    domingo = 1,
    segunda = 2,
    terca = 3,
    quarta = 4,
    quinta = 5,
    sexta = 6,
    sabado = 7
}

console.log(dias.domingo)
console.log(dias['domingo'])
console.log(dias[1])

const day = new Date()
console.log(day.getDate())
console.log(day.getDay())
console.log(dias[day.getDay()])


enum size {
    P = 'pequeno',
    M = 'medio',
    G = 'grande'
}

const T_shirt = {
    size: size.M,
    Color: 'red'
}

enum typeUser {
    USER = 500,
    ADMIN = 1000,
    SUPER = 1500
}

const user:typeUser=typeUser.SUPER;

console.log(user)