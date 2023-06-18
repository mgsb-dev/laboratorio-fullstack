document.addEventListener("DOMContentLoaded", function () {
  const formularioRegistro = document.getElementById("registroForm");
  const nombreInput = document.getElementById("nombre");
  const primerApellidoInput = document.getElementById("primerApellido");
  const segundoApellidoInput = document.getElementById("segundoApellido");
  const emailInput = document.getElementById("email");
  const contraseñaInput = document.getElementById("contraseña");
  const repetirContraseñaInput = document.getElementById("repetirContraseña");
  const botonEnviar = document.getElementById("botonEnviar");
  const botonTexto = document.getElementById("botonTexto");
  const spinner = document.getElementById("spinner");

  nombreInput.addEventListener("input", validarInputs);
  primerApellidoInput.addEventListener("input", validarInputs);
  segundoApellidoInput.addEventListener("input", validarInputs);
  emailInput.addEventListener("input", validarInputs);
  contraseñaInput.addEventListener("input", validarInputs);
  repetirContraseñaInput.addEventListener("input", validarInputs);

  function validarContraseñaCoinciden() {
    if (contraseñaInput.value === repetirContraseñaInput.value) {
      return true;
    }
    return false;
  }

  function validarContraseña() {
    if (
      contraseñaInput.value.length >= 4 &&
      contraseñaInput.value.length <= 8
    ) {
      return true;
    }
    return false;
  }

  function validarInputs() {
    if (
      nombreInput.validity.valid &&
      primerApellidoInput.validity.valid &&
      segundoApellidoInput.validity.valid &&
      emailInput.validity.valid &&
      validarContraseña() &&
      validarContraseñaCoinciden()
    ) {
      botonEnviar.classList.remove("btn-secondary");
      botonEnviar.classList.remove("disabled");
      botonEnviar.classList.add("btn-primary");
      botonEnviar.disabled = false;
      return;
    }
    botonEnviar.disabled = true;
    botonEnviar.classList.add("btn-secondary");
    botonEnviar.classList.remove("btn-primary");
  }

  formularioRegistro.addEventListener("submit", function (event) {
    if (
      nombreInput.validity.valid &&
      primerApellidoInput.validity.valid &&
      segundoApellidoInput.validity.valid &&
      emailInput.validity.valid &&
      validarContraseña() &&
      validarContraseñaCoinciden()
    ) {
      botonTexto.classList.add("d-none");
      spinner.classList.remove("d-none");
      spinner.classList.add("d-block");
      setTimeout(() => {
        botonTexto.classList.remove("d-none");
        spinner.classList.remove("d-inline");
        spinner.classList.add("d-none");
        botonEnviar.classList.remove("btn-primary");
        botonEnviar.classList.add("disabled");
      }, 2000);
    }
  });
});
