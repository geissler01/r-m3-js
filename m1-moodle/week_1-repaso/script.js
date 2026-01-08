console.log("hola mundo");
console.warn("Cuidado");

const single = 'hello "coder"';
let double = "Hello world";
// comillas invertidas tambien funcionan
console.log('hola a \ntodo lo que hay aqui ')
console.log('primera linea \nsegunda linea\ntercera linea')
console.log('\ttabular')
console.log('tabular \r linea 2')
console.log('hola \b mundo')
console.log('primera pagina \fsegunda pagina')

console.log(`'Hola a todo el munfo', ${single} y todo ${double}`)
// con las comillas invertidas puedo hacer algo similar a fprint de python

// Boleano
let hasCompletedModule = false;
console.log(hasCompletedModule)

// indefinido (undifined)
let value;
console.log(value)

// null = es la representacion intencionada de la ausencia de valor
let emptyValue= null;
console.log(emptyValue);

// Symbol : representa identificadores unicos
let uniqueID = Symbol('id'); // Debe ser bien escrito 
console.log(uniqueID)

// BigInt: para numeros mas grandes de la zona segura, solo para enteros
let bigNumber = 123456789987654321123456789n;
console.log(bigNumber);
let bigNumber1 = 123456789987654321123456789;
console.log(bigNumber1)
