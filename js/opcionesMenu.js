const frases = ['¡Feliz Cumpleaños!', 'Feliz Aniversario, Te Amo', 'Felicidades por el nuevo Bebé', 'Feliz San Valentín', 'Felicidades por tu Grado', 'Bendiciones en tu Matrimonio'];

// Funciones generadoras para las opciones del menú de configuración de la tarjeta
function generadorOpcionesMenu(titulo, numeroOpciones, nombreOpcion) {
  // Seleccionar el contenedor del menú lateral
  const menuLateral = document.querySelector('.menu-lateral');
  // Crear el contenedor principal de la tarjeta de opciones
  const tarjetaPrincipal = document.createElement('DIV');
  // Agregar las clases de la tarjeta
  tarjetaPrincipal.classList.add('card', 'distribucion', 'p-3', 'm-3');
  // Crear el contenedor del título de la sección
  const cardBody = document.createElement('DIV');
  cardBody.classList.add('card-body');
  // Crear el título de la sección
  const tituloSección = document.createElement('H4');
  tituloSección.classList.add('card-title', 'text-center');
  tituloSección.textContent = titulo;
  // Crear el contenedor de las opciones
  const contenedorOpciones = document.createElement('DIV');
  contenedorOpciones.classList.add('row', 'justify-content-center', 'align-items-center');

  // Definir el tipo de opciones según la sección
  if (nombreOpcion === 'opacidad') {

    const inputOpacidad = document.createElement('INPUT');
    inputOpacidad.type = 'range';
    inputOpacidad.name = nombreOpcion;
    inputOpacidad.id = nombreOpcion;
    inputOpacidad.min = '20';
    inputOpacidad.max = '100';
    inputOpacidad.step = '20';
    inputOpacidad.classList.add(nombreOpcion);

    // Agregar las opciones a su contenedor
    contenedorOpciones.appendChild(inputOpacidad);

  } else if (nombreOpcion === 'frase') {

    contenedorOpciones.classList.add('list-group', 'list-group-flush');

    for (let i = 0; i < numeroOpciones; i++) {
      const opcion = document.createElement('DIV');
      opcion.classList.add('list-group-item', 'frase', 'text-center');
      opcion.setAttribute(`data-${nombreOpcion}`, i+1);
      opcion.textContent = frases[i];
      
      // Agregar las opciones a su contenedor
      contenedorOpciones.appendChild(opcion);
    }

    // Seleccionar el último elemento de las opciones de frases para insertar un input para la opción personalizada
    const opcionPersonalizada = contenedorOpciones.lastChild;
    opcionPersonalizada.textContent = '';

    // Crear el formulario
    const formulario = document.createElement('FORM');
    formulario.id = 'frasePersonalizada';
    formulario.classList.add('m-auto', 'm-0', 'p-0', 'frase-personalizada');
    // Crear una etiqueta
    const label = document.createElement('LABEL');
    label.setAttribute('for', 'frase');
    label.classList.add('pb-2', 'frase-personalizada');
    label.textContent = 'Ingresa una frase Personalizada';
    // Crear el input de la opción
    const inputFrase = document.createElement('INPUT');
    inputFrase.type = 'text';
    inputFrase.id = 'frase';
    inputFrase.name = 'frase';
    inputFrase.placeholder = 'Ej: Ten una linda Tarde';
    inputFrase.maxlength = '31';
    inputFrase.classList.add('m-auto', 'm-0', 'p-0', 'w-100', 'frase-personalizada', 'input-frase');

    // Agregar la etiqueta y el input al formulario
    formulario.appendChild(label);
    formulario.appendChild(inputFrase);

    // Agregar la clase actual a la opción correspondiente
    const opcionActual = contenedorOpciones.firstChild;
    opcionActual.classList.add(`${nombreOpcion}-actual`);

    // Agregar el formulario a la opción
    opcionPersonalizada.appendChild(formulario);

  } else if (nombreOpcion !== 'opacidad') {

    // Crear las opciones de la tarjeta
    for (let i = 0; i < numeroOpciones; i++) {
      const opcion = document.createElement('DIV');
      opcion.classList.add('col-5', 'm-2', `item-${nombreOpcion}`, `${nombreOpcion}-${i+1}`);
      opcion.setAttribute(`data-${nombreOpcion}`, `${nombreOpcion}-${i+1}`);

      // Revisar si la sección es fuente o tamaño para agregar las clases correspondientes
      if (nombreOpcion === 'fuente') {
        opcion.textContent = 'F';
        opcion.classList.add('fs-3', 'contenedor-7');
      } else if (nombreOpcion === 'size') {
        opcion.textContent = 'F';
        opcion.classList.add('contenedor-7', `fs-${i+1}`);
      } else if (nombreOpcion === 'texto') {
        opcion.classList.add(`contenedor-${i+1}`);
      }

      // Agregar las opciones a su contenedor
      contenedorOpciones.appendChild(opcion);

    }

    // Agregar la clase actual a la opción correspondiente
    const opcionActual = contenedorOpciones.firstChild;
    opcionActual.classList.add(`${nombreOpcion}-actual`);
  }

  // Agregar el titulo al cardBody
  cardBody.appendChild(tituloSección);

  // Agregar elementos a la tarjeta principal
  tarjetaPrincipal.appendChild(cardBody);
  tarjetaPrincipal.appendChild(contenedorOpciones);

  // Agregar el contenedor al menú principal
  menuLateral.appendChild(tarjetaPrincipal);
}

export {
  generadorOpcionesMenu
}