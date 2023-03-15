let eventosFuturos = [];
let eventosPasados = [];
const eventos = data.events;
const fechaActual = data.currentDate;
const arrayDates = [];

for (let i = 0; i < eventos.length; i++){
    arrayDates.push(eventos[i].date)
}

function comparacionDeFecha(valorPrimero, arrayDeFechas, arrayDeEventos, arrayBefore, arrayAfter){
    {
    if(valorPrimero>arrayDeFechas[i]){
    arrayBefore.push(arrayDeEventos[i])
    }
    else{
    arrayAfter.push(arrayDeEventos[i])}
    }
}

for(i = 0; i < eventos.length; i++){
    comparacionDeFecha(fechaActual, arrayDates, eventos, eventosPasados, eventosFuturos)
}

console.log(eventosPasados);


// Constantes y variables capturadas
let contenedorDeTarjeta = document.getElementById("divDeTarjeta")
const input = document.getElementById("dataSearch")
const contenedorDeCategorias = document.getElementById("categorias")

//eventos
// Antes

/* input.addEventListener("input",()=>{
  let inputFiltrado = filtrarBusqueda(eventos,input.value)
  dibujarTarjetas(inputFiltrado)
})

contenedorDeCategorias.addEventListener("change",()=>{
  let arrayFiltrado = filtrarPorCategoria(eventos)
  dibujarTarjetas(arrayFiltrado)
}) */

// Despues
input.addEventListener("input",superFiltro)

contenedorDeCategorias.addEventListener("change",superFiltro)

//llamadas de funciones

dibujarTarjetas(eventosPasados)

crearCategorias(eventosPasados)


//funciones
function superFiltro() {
  let primerFiltro = filtrarBusqueda(eventosPasados,input.value)
let segundoFiltro = filtrarPorCategoria(primerFiltro)
dibujarTarjetas(segundoFiltro)
  
}

function dibujarTarjetas(arrayTarjetas) {
  if(arrayTarjetas.length ==0){
    contenedorDeTarjeta.innerHTML = "<h2>No hay elementos coincidentes</h2>"
    return
  }
  let tarjetas = ""
  arrayTarjetas.forEach(id => {
    tarjetas += ` <div class="col">
          <div class="card shadow-sm">
            <img src="${id.image}" class="d-inline w-100" alt="...">
            <div class="card-body">
              <h2>${id.name}</h2>
              <p class="card-text">${id.description}</p>
              <p class="card-text fw-bolder text-dark">Category: ${id.category}</p>
              <div class="d-flex justify-content-between align-items-center">
                <small class="text-muted">Price: ${id.price} $</small>
                <div class="btn-group">
                  <a href="./details.html?id=${id._id}" class="btn btn-sm btn-outline-secondary">View</a>
                </div>
              </div>
            </div>
          </div>
        </div>`
  });
  contenedorDeTarjeta.innerHTML = tarjetas
}

function filtrarBusqueda(arrayDeBusqueda,texto) {
  let arrayDeBusquedaFiltrado = arrayDeBusqueda.filter(id => id.name.toLowerCase().includes(texto.toLowerCase()))
  return arrayDeBusquedaFiltrado
}

function crearCategorias(arrayCategorias) {
  let arrayCategoriasCreadas = arrayCategorias.map(id=> id.category)
  // console.log(arrayCategoriasCreadas);
  let setCategorias = new Set(arrayCategoriasCreadas)
  // console.log(setCategorias);
  let checks = ""
  setCategorias.forEach(id=>{
    checks += `<div id="categorias" class="categorias">
    <form action="./assents/show_data.html">
      <label>
        ${id}
        <input id="${id}" type="checkbox" name="${id}" value="${id}">
      </label>
    </form>
  </div>`
contenedorDeCategorias.innerHTML = checks
  })
}

function filtrarPorCategoria(array) {
  let checkDeCategoria = document.querySelectorAll("input[type='checkbox']")
  // console.log(checkDeCategoria);
  let arrayChecks = Array.from(checkDeCategoria)
  let arrayDeCheckFiltrados = arrayChecks.filter(check => check.checked)
  if(arrayDeCheckFiltrados.length == 0){
    return array
  }
  // console.log(arrayDeCheckFiltrados);
  let categorias = arrayDeCheckFiltrados.map(check => check.value)
  // console.log(categorias);
  let arrayFiltradoDeSeleccion = array.filter(id => categorias.includes(id.category))
  // console.log(arrayFiltradoDeSeleccion); 
  return arrayFiltradoDeSeleccion
}