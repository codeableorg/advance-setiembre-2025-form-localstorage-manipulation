const mostrarDatos = (nombre, correo) => {
  document.getElementById("savedName").textContent = "Nombre: " + nombre;
  document.getElementById("savedEmail").textContent = "Correo: " + correo;
};

const checkLocalStorage = () => {
  const nombreGuardado = localStorage.getItem("nombre");
  const correoGuardado = localStorage.getItem("correo");
  if (nombreGuardado && correoGuardado) {
    mostrarDatos(nombreGuardado, correoGuardado);
  }
};

document.getElementById("userForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);

  const nombre = formData.get("name");
  const correo = formData.get("email");

  localStorage.setItem("nombre", nombre);
  localStorage.setItem("correo", correo);

  mostrarDatos(nombre, correo);

  this.reset();
});

checkLocalStorage();