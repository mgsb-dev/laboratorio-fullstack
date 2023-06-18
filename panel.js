document.addEventListener("DOMContentLoaded", function () {
  const gestorBoton = document.getElementById("gestorBoton");
  const itinerarioBoton = document.getElementById("itinerarioBoton");
  const mapaBoton = document.getElementById("mapaBoton");
  const tarjetaPerfil = document.getElementById("tarjetaPerfil");
  const itinerario = document.getElementById("itinerario");
  const mapa = document.getElementById("mapa");

  let tarjetaAbierta = false;
  let itinerarioAbierto = false;
  let mapaAbierto = false;

  tarjetaPerfil.classList.add("hidden");
  itinerario.classList.add("hidden");
  mapa.classList.add("hidden");

  gestorBoton.addEventListener("click", mostrarGestor);
  itinerarioBoton.addEventListener("click", mostrarItinerario);
  mapaBoton.addEventListener("click", mostrarMapa);

  function mostrarGestor() {
    if (!tarjetaAbierta) {
      tarjetaPerfil.classList.remove("hidden");
      itinerario.classList.add("hidden");
      mapa.classList.add("hidden");
      tarjetaAbierta = true;
      itinerarioAbierto = false;
      mapaAbierto = false;
      return;
    }
    tarjetaPerfil.classList.add("hidden");
    tarjetaAbierta = false;
  }

  function mostrarItinerario() {
    if (!itinerarioAbierto) {
      itinerario.classList.remove("hidden");
      tarjetaPerfil.classList.add("hidden");
      mapa.classList.add("hidden");
      itinerarioAbierto = true;
      tarjetaAbierta = false;
      mapaAbierto = false;
      return;
    }
    itinerario.classList.add("hidden");
    itinerarioAbierto = false;
  }

  function mostrarMapa() {
    if (!mapaAbierto) {
      mapa.classList.remove("hidden");
      itinerario.classList.add("hidden");
      tarjetaPerfil.classList.add("hidden");
      tarjetaAbierta = false;
      itinerarioAbierto = false;
      mapaAbierto = true;
      return;
    }
    mapa.classList.add("hidden");
    mapaAbierto = false;
  }
});
