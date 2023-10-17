const personajesDiv = document.querySelector(".personajes");
const btn = document.getElementById("btn");
const buscar = document.getElementById("buscar");

async function buscarPersonajes() {
  try {
    const busqueda = buscar.value;
    console.log(busqueda);
    // const res = await axios.get(
    //   "https://rickandmortyapi.com/api/character/?name="+busqueda
    // );
    const res = await axios.get(
      `https://rickandmortyapi.com/api/character/?name=${busqueda}`
    );
    pintarPersonajes(res.data.results);
  } catch (error) {
    console.error(error);
    personajesDiv.innerHTML =error.response.data.error
  }
}

function pintarPersonajes(personajes) {
  personajesDiv.innerHTML = "";
  personajes.forEach((personaje) => {
    personajesDiv.innerHTML += `<div class="card text-white bg-success mb-3 m-4" style="max-width: 20rem;">
    <div class="card-header">${personaje.name}</div>
    <div class="card-body">
      <h4 class="card-title">${personaje.status}</h4>
      <img style="max-width:25vw" src="${personaje.image}" alt="">    
      </div>
  </div>`;
  });
}

btn.addEventListener("click", buscarPersonajes);
