// ## MODIFICACIONES DE CONTENIDO
let mainTitle = document.getElementById('main-title');

// textContent: modificar texto
mainTitle.textContent = "Titulo 2";

// innertHTML: modifica html
let myTag = document.getElementsByTagName('my-tag');
myTag[0].innerHTML = '<strong>Riwi</strong>' // le metio ese html como hijo

// outerHTML: similar a inner, pero afecta la etiqueta padre, todo completo
let elementClass = document.querySelector('.riwi-class')
console.log(elementClass)
elementClass.outerHTML = '<section>New section</section>'

// ## MODIFICACIONES DE ATRIBUTO
// setAttribute() agrega o modifica un atributo
mainTitle =document.getElementById('main-title');
mainTitle.setAttribute("class", "card-img-top top genete") // elijo el atributo y le asigno valores como si estuviera en html

// getAttribuite: obtiene el atributo
const imagen = document.querySelector('img');
console.log(imagen.getAttribute("src")) // obtiene el valor de src

// removeAttribute: elemento.removeAttribute("atributo");
const tlorem = document.getElementById('tlorem');
tlorem.removeAttribute('id')

// ## Modificar atributos como propiedades
// input: VALIE: modifica lo que se muestra en los inputs
let inputName = document.getElementById('inputName');
inputName.value = "Geissler"

// src
imagen.src = 'https://brayanmontanez.wordpress.com/wp-content/uploads/2016/12/imgen-3.jpg?w=640'


// className:  remplaza todos las clases
mainTitle.className ='verde'

// classList: add
const modo = document.getElementById('modo');
console.log(modo)
modo.classList.add('activo')
// remove
modo.classList.remove('media')
// toggle: alterna el valor del atributo (me puede servir para modo oscuro)
modo.classList.toggle('activo')
modo.classList.toggle('activo')
modo.classList.toggle('activo')
// contains(): elemento.classList.contains('nombreClase)
console.log(modo.classList.contains('modo')) // devuelve true o false

// Estilos CSS: elemento.style.propiedadcss = "valor"
modo.style.height = "200px"

console.log(imagen.parentNode())