// script.js

// Función para cargar el archivo JSON
function cargarDatos() {
    fetch('data/datos.json') // Aquí se ajusta la ruta del archivo JSON
        .then(response => response.json())
        .then(data => mostrarDatos(data))
        .catch(error => console.error('Error al cargar los datos:', error));
}

// Función para mostrar los datos en el currículum
function mostrarDatos(data) {
    // Datos personales
    document.getElementById('nombre').innerText = 'Nombre: ' + data.datosPersonales.nombre;
    document.getElementById('correoElectronico').innerText = 'Correo electrónico: ' + data.datosPersonales.correoElectronico;
    document.getElementById('telefono').innerText = 'Teléfono: ' + data.datosPersonales.telefono;
    // document.getElementById('direccion').innerText = 'Dirección: ' + data.datosPersonales.direccion;

    // Sobre Mi
        // Datos personales
        document.getElementById('sobreMi').innerText = data.sobreMi.descripcion;

    // Estudios
    const listaEstudios = document.getElementById('listaEstudios');
    data.estudios.forEach(estudio => {
        const item = document.createElement('li');
        item.innerText = `${estudio.nivelTitulo} - ${estudio.titulo} - ${estudio.institucion} (${estudio.fechaFin})`;
        listaEstudios.appendChild(item);
    });

    // Experiencia laboral
    const listaExperiencia = document.getElementById('listaExperiencia');
    data.experienciaLaboral.forEach(experiencia => {
        const item = document.createElement('li');
        item.innerHTML = `<strong>${experiencia.puesto}</strong> - ${experiencia.empresa} (${experiencia.fechaFin})<ul>${experiencia.responsabilidades.map(responsabilidad => `<li>${responsabilidad}</li>`).join('')}</ul>`;
        listaExperiencia.appendChild(item);
    });
}

// Boton de Contacto
let footerVisible = false;

document.getElementById("toggleFooter").addEventListener("click", function() {
  const footer = document.getElementById("footer");
  
  if (!footerVisible) {
    footer.style.display = "flex";
    document.body.style.overflow = "hidden";
    setTimeout(() => footer.style.opacity = "1", 10);
  } else {
    footer.style.opacity = "0";
    document.body.style.overflow = "auto";
    setTimeout(() => footer.style.display = "none", 500);
  }

  footerVisible = !footerVisible;
});

// Llamar a la función para cargar los datos al cargar la página
window.onload = cargarDatos;


