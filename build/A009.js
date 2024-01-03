"use strict";
function doSomething() {
    console.log('Hello');
}
doSomething();
doSomething();
doSomething();
const log = (valor) => {
    console.log(valor);
};
function userLog(user, password) {
    let obj = {
        name: user,
        password: password
    };
    console.log(obj);
}
userLog('bruno', 2024);
const sum = (n1, n2) => {
    return n1 + n2;
};
log(sum(2, 5));
log(sum(20, 5).toString());
log('hola log');
log(true);
const somethig = function () {
    console.log('Something...');
};
doSomething();
(function () {
    console.log('welcome to console');
})();