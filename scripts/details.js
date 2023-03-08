let eventosFuturos = [];
let eventosPasados = [];
const fechaActual = data.currentDate;
const eventos = data.events;
// console.log(eventos);
// console.log(fechaActual);

console.log(eventos[0].date);

let arrayDates = [];

for (let i = 0; i < eventos.length; i++){
    arrayDates.push(eventos[i].date);
}
console.log(arrayDates);

function comparacionDeFecha(valorPrimero, arrayDeFechas, arrayDeEventos, arrayBefore, arrayAfter){
    for(i=0; i<arrayDeEventos.length;i++){
    if(valorPrimero>arrayDeFechas[i]){
    arrayBefore.push(arrayDeEventos[i])
    }
    else{
    arrayAfter.push(arrayDeEventos[i])}
    }
}

comparacionDeFecha(fechaActual, arrayDates, eventos, eventosPasados, eventosFuturos);

console.log(eventosPasados);
console.log(eventosFuturos);


// console.log(arrayDates);

let contenedorDeTarjeta = document.getElementById("divDeTarjeta")

console.log(contenedorDeTarjeta);

let stringHtml = ""

function dibujarCards(){

for (const id of data.events) {

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