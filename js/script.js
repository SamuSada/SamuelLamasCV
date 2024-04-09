// Función para cargar el archivo JSON
function cargarDatos() {
  fetch('data/datos.json')
      .then(response => response.json())
      .then(data => mostrarDatos(data))
      .catch(error => handleError('Error al cargar los datos:', error));
}

// Función Datos Personales
function mostrarDatosPersonales(datosPersonales) {
  document.getElementById('nombre').innerText = 'Nombre: ' + datosPersonales.nombre;
  document.getElementById('correoElectronico').innerText = 'Correo electrónico: ' + datosPersonales.correoElectronico;
  document.getElementById('telefono').innerText = 'Teléfono: ' + datosPersonales.telefono;
}

// Función Sobre Mí
function mostrarSobreMi(sobreMi) {
  document.getElementById('sobreMi').innerText = sobreMi.descripcion;
}

// Función Estudios
function mostrarListaEstudios(idLista, data, propiedades) {
  const lista = document.getElementById(idLista);
  data.forEach(item => {
      const elemento = document.createElement('li');
      elemento.innerText = propiedades.map(propiedad => item[propiedad]).join(' - ');
      lista.appendChild(elemento);
  });
}

// Función Conocimientos
function mostrarListaConocimientos(idLista, conocimientos) {
  const lista = document.getElementById(idLista);
  conocimientos.forEach(conocimiento => {
      const elemento = document.createElement('li');
      elemento.innerText = conocimiento.materia;
      const medidor = document.createElement('div');
      medidor.className = 'medidor';
      const barra = document.createElement('div');
      barra.className = 'barra';
      barra.style.width = `${conocimiento.nivel}%`;
      medidor.appendChild(barra);
      elemento.appendChild(medidor);
      lista.appendChild(elemento);
  });
}

// Función Idiomas
function mostrarListaIdiomas(idLista, idiomas) {
  const lista = document.getElementById(idLista);
  idiomas.forEach(idioma => {
      const elemento = document.createElement('li');
      elemento.innerText = idioma.idioma;
      const medidor = document.createElement('div');
      medidor.className = 'medidor';
      const barra = document.createElement('div');
      barra.className = 'barra';
      barra.style.width = `${idioma.nivel}%`;
      medidor.appendChild(barra);
      elemento.appendChild(medidor);
      lista.appendChild(elemento);
  });
}

// Función Experiencia Laboral
function mostrarExperienciaLaboral(experienciaLaboral) {
  const lista = document.getElementById('listaExperiencia');
  experienciaLaboral.forEach(experiencia => {
      const elemento = document.createElement('li');
      elemento.innerHTML = `<strong>${experiencia.puesto}</strong> - ${experiencia.empresa} (${experiencia.fechaFin})<ul>${experiencia.responsabilidades.map(responsabilidad => `<li>${responsabilidad}</li>`).join('')}</ul>`;
      lista.appendChild(elemento);
  });
}

// Función para mostrar los datos en cada Section
function mostrarDatos(data) {
  mostrarDatosPersonales(data.datosPersonales);
  mostrarSobreMi(data.sobreMi);
  mostrarListaEstudios('listaEstudios', data.estudios, ['nivelTitulo', 'titulo', 'institucion', 'fechaFin']);
  mostrarListaConocimientos('listaConocimientos', data.conocimientos, 'materia', 'nivel');
  mostrarListaIdiomas('listaIdiomas', data.idiomas, 'idioma', 'nivel');
  mostrarExperienciaLaboral(data.experienciaLaboral);
}

// Mostrar/Ocultar Footer
document.getElementById('toggleFooter').addEventListener('click', function() {
  var body = document.body;
  var footer = document.getElementById('footer');
  if (footer.style.display === 'none' || footer.style.display === '') {
    footer.style.display = 'flex';
    setTimeout(function() {
      footer.style.opacity = '1';
      body.style.overflowY = "hidden";
    }, 10);
  } else {
    footer.style.opacity = '0';
    setTimeout(function() {
      footer.style.display = 'none';
      body.style.overflowY = "auto";
    }, 500);
  }
});

// Cargar datos al cargar la página
window.onload = cargarDatos;
