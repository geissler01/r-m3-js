// operadore logicos
// and = &&
// or = ||
// not = !

/* OPERADORES ARITMETICOS:
suma => +
resta => -
multiplicacion => *
division => /
modulo => %
incremento => let a = 1; a++
decremento => let a = 0; a--
exponenciacion => **
*/
// ejemplos:
// let a = 2; b = 4, c = 5;
// suma = a + b + c;
// modulo = c % 2;
// console.log(suma)
// console.log(modulo)
// console.log(a++)
// console.log(b--)

// let x = 5;
// let y = x++;
// console.log(y); // 5
// console.log(x); // 6

// let x = 5;
// let y = ++x;
// console.log(y); // 6
// console.log(x); // 6

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// OPERADORES DE COMPARACION
// == igual a | 1 == '1' => true
// === estrictamente igual | 1 === '1' => false
// != diferente | 10 != '10' => false
// !== estrictamente diferente | 10 !== '10' => true
// > mayor que, > menor que, >= mayor o igual, <= menor o igual

// OPERADORES DE ASIGNACION
let x = 10;
console.log("Valor inicial:", x);

// Asignación simple
x = 5;
console.log("Después de x = 5:", x);

// Suma y asigna
x += 3; // x = x + 3
console.log("Después de x += 3:", x);

// Resta y asigna
x -= 2; // x = x - 2
console.log("Después de x -= 2:", x);

// Multiplica y asigna
x *= 4; // x = x * 4
console.log("Después de x *= 4:", x);

// Divide y asigna
x /= 3; // x = x / 3
console.log("Después de x /= 3:", x);

// Módulo y asigna
x %= 5; // x = x % 5
console.log("Después de x %= 5:", x);

// Potencia y asigna
x **= 2; // x = x ** 2
console.log("Después de x **= 2:", x);

// OPERADOR CONCATENADOR DE CADENAS:
const message = "hola" + "mundo"
console.log(message + "estoy aqui")
