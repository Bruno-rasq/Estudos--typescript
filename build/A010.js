"use strict";
function SumTwoNumber(n1 = 0, n2 = 0) {
    return n1 + n2;
}
console.log(SumTwoNumber(5, 5)); 
console.log(SumTwoNumber(6)); 
console.log(SumTwoNumber()); 
function newUser(user, pass, nome) {
    let obj = {
        user,
        pass,
        nome
    };
    console.log(obj);
}
newUser('admin', 3337, 'jonas');
newUser('admin', 5000);