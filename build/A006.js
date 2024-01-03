"use strict";
var dias;
(function (dias) {
    dias[dias["domingo"] = 1] = "domingo";
    dias[dias["segunda"] = 2] = "segunda";
    dias[dias["terca"] = 3] = "terca";
    dias[dias["quarta"] = 4] = "quarta";
    dias[dias["quinta"] = 5] = "quinta";
    dias[dias["sexta"] = 6] = "sexta";
    dias[dias["sabado"] = 7] = "sabado";
})(dias || (dias = {}));
console.log(dias.domingo);
console.log(dias['domingo']);
console.log(dias[1]);
const day = new Date();
console.log(day.getDate());
console.log(day.getDay());
console.log(dias[day.getDay()]);
var size;
(function (size) {
    size["P"] = "pequeno";
    size["M"] = "medio";
    size["G"] = "grande";
})(size || (size = {}));
const T_shirt = {
    size: size.M,
    Color: 'red'
};
var typeUser;
(function (typeUser) {
    typeUser[typeUser["USER"] = 500] = "USER";
    typeUser[typeUser["ADMIN"] = 1000] = "ADMIN";
    typeUser[typeUser["SUPER"] = 1500] = "SUPER";
})(typeUser || (typeUser = {}));
const user = typeUser.SUPER;
console.log(user);