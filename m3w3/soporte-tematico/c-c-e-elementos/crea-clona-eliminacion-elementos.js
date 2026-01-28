// ## CREAR ELEMENTOS
// sintaxis: document.createElement('etiqueta');
const list = document.getElementById('list');
const btnCreate = document.getElementById('btnCreate');

btnCreate.onclick = () => {
    const li = document.createElement("li");
    li.textContent = 'Nuevo elemento';
    li.classList.add('item');
    list.appendChild(li) // le añade un hijo a list, qu es li
}
// insertBefore: tambien inserta elementos antes de nuestra eleccion

// ## CLONAR ELEMENTOS
// sintaxis: elemento.cloneNode(true); true(estructura y contenido), false(etiqueta vacia)
const btnClone = document.getElementById('btnClone');
btnClone.onclick = () => {
    const firstItem = list.firstElementChild; // obtiene el primer elemento

    if (!firstItem) return;

    const clone = firstItem.cloneNode(true); // con false, solo la estructura sin contenido
    list.appendChild(clone)
}

// ## ELIMINAR ELEMENTOS
// element.remove()
const btnDelete = document.getElementById('btnDelete');
btnDelete.onclick = () => {
    const lastItem = list.lastElementChild;

    if (!lastItem) return;
    
    lastItem.remove();  // elimina
}

// ## REEMPLAZAR ELEMENTO:
// elementoviejo.replaceWith(elementoNuevo);

const btnReplace = document.getElementById('btnReplace');
btnReplace.textContent = 'Primer cambio';
document.body.appendChild(btnReplace);

btnReplace.onclick = () => {
    const primerItem = list.firstElementChild;
    
    if (!primerItem) return;

    const newItem = document.createElement('li');
    newItem.textContent = 'Elemento remplazado';
    newItem.classList.add('item');

    primerItem.replaceWith(newItem);
}  // esta inutil pot el ultimo codigo, ESCOGER UNO DE LOS DOS. Este es mas directo, pero el otro es mas comodo

// otra forma de remplazar
// padre.replaceChild(nuevoElemento, viejoElemento)
btnReplace.onclick = () => {
    const oneItem = list.firstElementChild;

    if (!oneItem) return;

    const nuevoItem = document.createElement('button')
    nuevoItem.textContent = 'boton que remplaza';
    nuevoItem.classList.add('item');

    list.replaceChild(nuevoItem, oneItem)
}


