// ciclo for(inicio ; condicion (opcional) ; incremento (opcional)) {code block to be repeated}
for (let i = 0; i < 10; i++){
    console.log(i);
    continue;
    i++  // sobra
};

// ciclo while => sintaxis while(condicion) {code}
let i = 0;
while(i<10){
    console.log(i)
    i++; //aqui si es importante
}

// do while => sintaxis do { code } while(condicion);
// let option;

// do {
//     console.log('uno');
//     console.log('dos');

//     option == 1; //simular opcion del usuario

//     if (option === 1){
//         console.log('hello');
//     }
//     break
// } while (option !== 2);

let j = 1;

do {
    console.log("Número " + j);
    j++;
} while (j <= 5);


// ## SWITCH
let fruta = "manzana";

switch (fruta) {
    case "manzana":
        console.log("Es una manzana 🍎");
        break;
    case "banana":
        console.log("Es una banana 🍌");
        break;
    case "naranja":
        console.log("Es una naranja 🍊");
        break;
    default:
        console.log("No conozco esa fruta 🤷‍♂️");
}


// Trusthy and Falsy
// false
// 0
// -0
// 0n       // BigInt cero
// ""       // cadena vacía
// null
// undefined
// NaN

// true
// "hola"
// 42
// -3.14
// []
// {}
// function(){}

let valor1 = 0;
let valor2 = "Hola";
let valor3 = [];

if (valor1) {
    console.log("valor1 es truthy");
} else {
    console.log("valor1 es falsy");
}

if (valor2) {
    console.log("valor2 es truthy");
} else {
    console.log("valor2 es falsy");
}

if (valor3) {
    console.log("valor3 es truthy");
} else {
    console.log("valor3 es falsy");
}

let arra = [1, 2, 3];
console.log(arra)
while (arra.length) {  // arr.length es truthy mientras haya elementos
    console.log("Sacando elemento:", arra.pop());
}
console.log("El array está vacío, condición falsy, se detiene el while");

let a = 0;

// Condición implícita
if (a) {
    console.log("a es truthy");
} else {
    console.log("a es falsy");
}

// Condición explícita
if (a !== 0) {
    console.log("a es distinto de cero");
} else {
    console.log("a es igual a cero");
}

// ### Arrays (listas)
let arr = [10, 20, 30];
console.log(arr[0]); // 10
console.log(arr[2]); // 30

// metodos array
arr.push(40) // agrega al final
arr.pop() // quita del final
arr.shift() // quita el inicio
arr.unshift() // agrega al inicio
// arr.length() // longitud

// arrays con constantes
const miArray = [1,2,3];
// puedo hacer las operaciones, pero no puedo reasignar valores miArray

// ### Objetos (diccionarios)
let persona = {
    nombre: "Juan",
    edad: 25,
    ciudad: "Madrid"
};

console.log(persona.nombre); // Juan
console.log(persona["edad"]); // 25

persona.pais = "España";    // agregar
persona.edad = 26;          // modificar
delete persona.ciudad;      // borrar

const personaConst = { nombre: "Ana" };
personaConst.nombre = "Luis"; // ✅ Se puede cambiar
personaConst.edad = 30;       // ✅ Se puede agregar
// personaConst = {};            // ❌ Error: no puedes reasignar el objeto

