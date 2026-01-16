// SECCIÓN 1: crendo objeto
const products = {
    id: '000',  // varibale string
    name: 'Limon',  // tipo string
    price: 3000,  // tipo número
};

// SECCIÓN 2: uso de Set
const listDuplicated = [1, 2, 3, 3, 5, 7, 5, 2, 8, 6];
console.log(listDuplicated);  // se muestra la lista
const setList = new Set(listDuplicated);  // declaracion de Set;
console.log('Contenido del Set  (duplicados eliminados):', [...setList]);  // se muestra el set a partir de la lista anterior

// Agregando nuevo número al Set
setList.add(9);
console.log('Set después de agregar el 9:', [...setList]);

// verificando si un numero existe en el Set
if (setList.has(3)){
    console.log('El numero 3 existe en el Set.')
};

// Eliminar un número del Set
setList.delete(5);
console.log('Set despues de eliminar el 5:', [...setList]);

// Recorriendo el set con for...of
console.log('Recorriendo el Set con for...of:')
for (const valor of setList) {
    console.log(valor);
}

// SECCIÓN 3: Creacion del Map
const mapCategory = new Map();
function addProductMap(map, category, product){
    if (map.has(category)){
        map.get(category).push(product);  //agrego al array existente
    } else {
        map.set(category, [product]) // agrega el nuevo array
    }
}

// ejemplo
let product1 = {id:'002', name:'Manzana', price: 2000, category: 'Frutas'};
let product2 = {id:'003', name:'Lechuga', price: 4000, category: 'Verduras'};
let product3 = {id:'003', name:'Uva', price: 10000, category: 'Frutas'};

addProductMap(mapCategory, product1.category, product1);
addProductMap(mapCategory, product2.category, product2);
addProductMap(mapCategory, product3.category, product3);
console.log(mapCategory)

// SECCIÓN 4: iteraciones
console.log('Iterando sobr el objeto products con for...in:');
for (const property in products) {
    console.log(`${property}: ${products[property]}`);  // con for in encuentro la clave y la llamo directamente en cada iteracion
};

console.log('Interando sobre el Map con forEach:');
mapCategory.forEach((prod, cat) => {
    console.log(`Caterogia: ${cat}`);
    prod.forEach(p => {
        console.log(` -Nombre: ${p.name}, ID: ${p.id}, Precio: ${p.price}`)
    });
})

// SECCION 5: Validacion y pruebas
function validateProduct(product){
    if (!product || typeof product !== 'object') {
        return false; //asegura que el argumento sea un objeto no vacio
    }
    if (!product.id || typeof product.id !=='string'){
        return false; // asegura que id sea string y no vacío
    }
    if (!product.name || typeof product.name !=='string'){
        return false; // asegura que id sea string y no vacío
    }
    if (typeof(product.price) !== 'number' || isNaN(product.price) || product.price <= 0){
        return false; // precio debe ser numero y positivo
    }
    return true;  // si llega aquí la valudación fue exitosa
}

// validacion
const listProducts = [ product1, product2, product3,
    {id: '004', name: 'Giayaba', price: -1},
    {id: 123, name: 'Maracuya', price: 3000},
];
console.log(listProducts);

// filtrando valores validos
const valid_products = listProducts.filter(validateProduct);
console.log(valid_products);

// Crenado un ser de nombres unicos a partir de la una lista obtenida del arreglo anterior
const setUniqueProducts = new Set(valid_products.map(prod => prod.name));
console.log('Lista completa de productos únicos (Set de nombres):', [...setUniqueProducts]);

// Mapa de categorias con productos válidos
const mapValidCategories = new Map();
valid_products.forEach(prod => {
    addProductMap(mapValidCategories, prod.category || 'No category', prod);
});
console.log(mapValidCategories)

console.log('Categoria y nombre de productos (Map):');
mapValidCategories.forEach((prod, categori) => {
    const names = prod.map(p => prod.name). join(', ');
    console.log(`${categori}: ${names}`);
})





