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

let contenedorDeTarjeta = document.getElementById("divDeTarjeta")

console.log(contenedorDeTarjeta);

let stringHtml = ""

function dibujarCards(){

for (const id of eventosPasados) {

  stringHtml += `
  
  <div class="col">
            <div class="card shadow-sm">
              <img src="${id.image}" class="d-inline w-100" alt="...">
              <div class="card-body">
                <h2>${id.name}</h2>
                <p class="card-text">${id.description}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <small class="text-muted">Price: ${id.price} $</small>
                  <div class="btn-group">
                    <a href="./details.html" class="btn btn-sm btn-outline-secondary">View</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
  `
}
}

dibujarCards();

contenedorDeTarjeta.innerHTML = stringHtml