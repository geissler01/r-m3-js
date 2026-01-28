const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const resultInput = document.getElementById('result');

const btnLocal = document.getElementById('saveLocal');
const btnSession = document.getElementById('saveSession');
const btnRead = document.getElementById('read');
const btnRemove = document.getElementById('remove');

function getDates() {  // funcion para obtener el objeto
    return {
        name: nameInput.value,
        age: ageInput.value,
    };
}

// guardar en local storage
localStorage.setItem('clave', 'valor'); // son los titulos

btnLocal.onclick = () => {
    let dates = getDates();
    localStorage.setItem('usuario', JSON.stringify(dates));
}

sessionStorage.setItem('clave', 'valor')
btnSession.onclick = () => {
    dates = getDates();
    sessionStorage.setItem('usuario', JSON.stringify(dates))
}

// leer datos del storage
btnRead.onclick = () => {
    let local = localStorage.getItem('usuario');
    let session = sessionStorage.getItem('usuario');
    console.log(session)

    resultInput.textContent = `
    LocalStorage:
    ${local ? JSON.stringify(JSON.parse(local), null, 2) : 'sin datos'}
    
    sessionStorage:
    ${session ? JSON.stringify(JSON.parse(session), null, 2) : 'sin dates'}
    }`
}

// Borrar datos
// storage.removeItem('clave')
btnRemove.onclick = () => {
    localStorage.removeItem('usuario')
    sessionStorage.removeItem('usuario')
    resultInput.textContent = 'datos borrados'
}

// borrar todo 
// localStorage.clear();    sessionStorage.clear()