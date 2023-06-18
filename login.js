document.addEventListener("DOMContentLoaded", function () {
  const formularioLogin = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const contraseñaInput = document.getElementById("contraseña");
  const botonEnviar = document.getElementById("botonEnviar");
  const botonTexto = document.getElementById("botonTexto");
  const spinner = document.getElementById("spinner");

  emailInput.addEventListener("input", validarInputs);
  contraseñaInput.addEventListener("input", validarInputs);

  function validarInputs() {
    if (emailInput.validity.valid && contraseñaInput.validity.valid) {
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

  formularioLogin.addEventListener("submit", function (event) {
    if (emailInput.validity.valid && contraseñaInput.validity.valid) {
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
