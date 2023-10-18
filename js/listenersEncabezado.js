function listenerColorTexto () {
  const opcionesColorTexto = document.querySelectorAll('.item-texto');

  // Recorremos las opciones
  opcionesColorTexto.forEach(opcion => {
    // Agregamos el listener a cada opción
    opcion.addEventListener('click', (e) => {
      const textoPrincipal = document.querySelector('.texto-principal');
      const textoActual = document.querySelector('.texto-actual');

      // Marcamos la opción a la que se le dio click como la opción actual, y eliminamos la marca de la opción anterior
      textoActual.classList.remove('texto-actual');
      e.target.classList.add('texto-actual');

      // Quitamos las clases de color que pueda tener el texto y agregamos la clase del color seleccionado
      textoPrincipal.classList.remove(textoActual.dataset.texto);
      textoPrincipal.classList.add(e.target.dataset.texto);
    });      
  });
}

function listenerFuenteTexto () {
  const opcionesFuenteTexto = document.querySelectorAll('.item-fuente');

  // Recorremos las opciones
  opcionesFuenteTexto.forEach(opcion => {
    // Agregamos el listener a cada opción
    opcion.addEventListener('click', (e) => {
      const textoPrincipal = document.querySelector('.texto-principal');
      const fuenteActual = document.querySelector('.fuente-actual');

      // Marcamos la opción a la que se le dio click como la opción actual, y eliminamos la marca de la opción anterior
      fuenteActual.classList.remove('fuente-actual');
      e.target.classList.add('fuente-actual');

      // Quitamos las clases de fuente que pueda tener el texto y agregamos la clase del color seleccionado
      textoPrincipal.classList.remove(fuenteActual.dataset.fuente);
      textoPrincipal.classList.add(e.target.dataset.fuente);
    });
  });
}

function listenerSizeTexto () {
  const opcionesSizeTexto = document.querySelectorAll('.item-size');

  // Recorremos las opciones
  opcionesSizeTexto.forEach(opcion => {
    // Agregamos el listener a cada opción
    opcion.addEventListener('click', (e) => {
      const textoPrincipal = document.querySelector('.texto-principal');
      const sizeActual = document.querySelector('.size-actual');

      // Marcamos la opción a la que se le dio click como la opción actual, y eliminamos la marca de la opción anterior
      sizeActual.classList.remove('size-actual');
      e.target.classList.add('size-actual');

      // Quitamos las clases de tamaño que pueda tener el texto y agregamos la clase del tamaño seleccionado
      textoPrincipal.classList.remove(`fs-${sizeActual.dataset.size.slice(-1)}`);
      textoPrincipal.classList.add(`fs-${e.target.dataset.size.slice(-1)}`);
    });
  });
}

function listenerFrases () {
  const frases = document.querySelectorAll('.frase');

  // Recorremos las opciones
  frases.forEach(frase => {
    // Agregamos el listener a cada opción
    frase.addEventListener('click', (e) => {
      const textoPrincipal = document.querySelector('.texto-principal');
      const fraseActual = document.querySelector('.frase-actual');
      const inputFrase = document.querySelector('.input-frase');
      const opcionPersonalizada = document.querySelector('.list-group-item .frase-personalizada');

      inputFrase.value = '';
      textoPrincipal.textContent = '';
      // Reglas para cambiar el texto principal por la frase seleccionada. Hay dos posibilidades, que sea una frase prediseñada o que sea una frase definida por el usuario.
      fraseActual.classList.remove('frase-actual');        
      
      // En caso de que se haga click en la opción de frase personalizada, agregar la clase actual al contenedor correcto, agregar el eventListener con el evento input para que se muestre la informaicón a medida que se teclea en el input. Si no es la opción personalizada, entonces se agrega la clase actual a la opción clickeada y se muestra en el texto el contenido seleccionado 
      if (e.target.classList.contains('frase-personalizada')) {
        opcionPersonalizada.parentElement.classList.add('frase-actual');
        inputFrase.addEventListener('input', () => {
          textoPrincipal.textContent = e.target.value;
        });
      } else {
        e.target.classList.add('frase-actual');  
        textoPrincipal.textContent = e.target.textContent;
      }
    });
  });
}

export {
  listenerColorTexto,
  listenerFuenteTexto,
  listenerSizeTexto,
  listenerFrases
}