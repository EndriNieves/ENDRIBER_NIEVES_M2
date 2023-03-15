console.log([document]);
let contenedorDetalle = document.getElementById("divDeTarjeta")
const queryString = window.location.search
const paramsQuery = new URLSearchParams(queryString)
const idQuery = paramsQuery.get("id")
const eventos = data.events;
const id = data.events.find(eventos => eventos._id == idQuery)

contenedorDetalle.innerHTML = `<div class="col">
          <div class="card shadow-sm">
            <img src="${id.image}" class="d-inline w-100" alt="...">
            <div class="card-body">
              <h2>${id.name}</h2>
              <p class="card-text">${id.description}</p>
              <p class="card-text fw-bolder text-dark">Category: ${id.category}</p>
              <p class="card-text fw-bolder text-dark">Date: ${id.date}</p>
              <p class="card-text fw-bolder text-dark">Place: ${id.place}</p>
              <p class="card-text fw-bolder text-dark">Capacity: ${id.capacity}</p>
              <p class="card-text fw-bolder text-dark">Assistance / Estimate:  ${id.assistance} / ${id.estimate}</p>
              <div class="d-flex justify-content-between align-items-center">
                <small class="text-muted">Price: ${id.price} $</small>
                <div class="btn-group">
                  <a href="./index.html" class="btn btn-sm btn-outline-secondary">Back</a>
                </div>
              </div>
            </div>
          </div>
        </div>`

