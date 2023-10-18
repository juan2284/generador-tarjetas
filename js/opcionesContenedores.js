function generaOpcionesAdicionales (numeroImagenes) {
  const distribucionActual = document.querySelector('.distribucion-actual');
  const contenedoresFinales = document.querySelectorAll('.contenedores-finales');
  const menuLateral = document.querySelector('.menu-lateral');

  // Crear el contenedor de todas las opciones de todos los contenedores
  const contenedorMaestro = document.createElement('DIV');
  contenedorMaestro.classList.add('contenedor-contenidos', `contenidos-${distribucionActual.dataset.distribucion}`);

  // Generar un ciclo para crear tantas opciones como contenedores finales haya
  // Recorrer los contenedores finales para generar las opciones de menú correctas
  for (let i = 0; i < contenedoresFinales.length; i++) {
    if (contenedoresFinales[i].classList.contains('subtitulo')) {
      // Crear la tarjeta de texto
      // Crear la tarjeta principal que va a contener la sección de imagenes
      const tarjetaTexto = document.createElement('DIV');
      tarjetaTexto.classList.add('card', 'contenidos', `contenidos-tarjeta-${i+1}`, 'p-3', 'm-3');
      tarjetaTexto.setAttribute('data-contenedor', i+1);
      // Crear el contendor del título de la tarjeta de imagenes
      const tarjetaBodyTexto = document.createElement('DIV');
      tarjetaBodyTexto.classList.add('card-body');
      // Crear el título de la sección
      const tituloSeccionTexto = document.createElement('H4');
      tituloSeccionTexto.classList.add('card-title', 'text-center');
      tituloSeccionTexto.textContent = `Mensaje del Contenedor ${i+1}`;
      const contenedorTextarea = document.createElement('DIV');
      contenedorTextarea.classList.add('row', 'justify-content-center', 'align-items-center');
      // Crear el textarea del mensaje
      const textareaMensaje = document.createElement('TEXTAREA');
      textareaMensaje.classList.add('w-100', 'oswald', 'm-2', `texto-actual-${i+1}`);
      textareaMensaje.setAttribute('placeholder', 'Escribe tu mensaje AQUI');
      textareaMensaje.rows = '5';
      textareaMensaje.setAttribute('maxlength', '188');
      textareaMensaje.setAttribute('data-contenedor', i+1);

      // Agregar el listener para el textarea del mensaje
      textareaMensaje.addEventListener('click', (e) => {
        const textareaContenidoActual = document.querySelector(`.texto-actual-${e.target.parentNode.parentNode.dataset.contenedor}`);
        const contenedoresFinales = document.querySelectorAll('.contenedores-finales');

        // Recorrer los textarea y modificar las clases según el color del contenedor final
        if (contenedoresFinales[+e.target.parentNode.parentNode.dataset.contenedor-1].parentNode.classList.contains('contenedor-1')) {
          contenedoresFinales[+e.target.parentNode.parentNode.dataset.contenedor-1].classList.remove('texto-1');  
          contenedoresFinales[+e.target.parentNode.parentNode.dataset.contenedor-1].classList.add('texto-7', 'p-3', 'text-center', 'fw-bold');
        } else {
          contenedoresFinales[+e.target.parentNode.parentNode.dataset.contenedor-1].classList.remove('texto-7');  
          contenedoresFinales[+e.target.parentNode.parentNode.dataset.contenedor-1].classList.add('texto-1', 'p-3', 'text-center', 'fw-bold');
        }
        // Agregar el listener al textarea, con el evento input para que agregue el texto al contenedor final
        textareaContenidoActual.addEventListener('input', () => {
          contenedoresFinales[+e.target.parentNode.parentNode.dataset.contenedor-1].textContent = textareaContenidoActual.value;
        });
      });
      
      // agregar el textarea al contenedor
      contenedorTextarea.appendChild(textareaMensaje);
      // Agregar el tituloSeccion a la tarjetaBody
      tarjetaBodyTexto.appendChild(tituloSeccionTexto);
      // Agregar tarjetaBody al contenedor principal
      tarjetaTexto.appendChild(tarjetaBodyTexto);
      tarjetaTexto.appendChild(contenedorTextarea);

      // Agregar el botón píldora al contenedor maestro
      contenedorMaestro.appendChild(tarjetaTexto);

    } else {
      // Crear la tarjeta principal que va a contener el botón píldora
      const tarjetaPildora = document.createElement('DIV');
      tarjetaPildora.classList.add('card', 'contenidos', `contenidos-tarjeta-${i+1}`, 'p-3', 'm-3');
      // Crear el contendor del título de la tarjeta de la píldora
      const tarjetaBody = document.createElement('DIV');
      tarjetaBody.classList.add('card-body');
      // Crear el título de la sección
      const tituloSeccion = document.createElement('H4');
      tituloSeccion.classList.add('card-title', 'text-center');
      tituloSeccion.textContent = `Contenido del Contenedor ${i+1}`;
      // Crear el contenedor de la pildora
      const contenedorBtn = document.createElement('DIV');
      contenedorBtn.classList.add('row', 'justify-content-center', 'align-items-center');
      // Crear un subtitulo para el botón
      const subtituloPildora = document.createElement('H5');
      subtituloPildora.classList.add('card-title', 'text-center');
      subtituloPildora.textContent = 'Imagen - Texto';
      // Crear el contenedor de los elementos del botón
      const contenedorBtnSwitch = document.createElement('DIV');
      contenedorBtnSwitch.classList.add('row', 'justify-content-around', 'gris-plomo', 'align-items-center', 'switch', 'p-0');
      contenedorBtnSwitch.setAttribute('data-contenedor', i+1);
      // Generar los tres elementos del botón
      const elemento1 = document.createElement('DIV');
      elemento1.classList.add('btn-switch-derecha', 'm-0', 'p-0');
      const elemento2 = document.createElement('DIV');
      elemento2.classList.add('col-12', 'item-contenido', 'contenido-actual', 'p-0', 'm-0', 'paisaje-sq');
      elemento2.title = 'Imagen';
      const elemento3 = document.createElement('DIV');
      elemento3.classList.add('col-12', 'item-contenido', 'contenido-actual', 'p-0', 'm-0', 'text-sq');
      elemento3.title = 'Texto';

      // Agregar el tituloSeccion a la tarjetaBody
      tarjetaBody.appendChild(tituloSeccion);
      // Agregar tarjetaBody a la tarjetaPildora
      tarjetaPildora.appendChild(tarjetaBody);

      // Agregamos los tres elementos del botón al contenedorBtnSwitch
      contenedorBtnSwitch.appendChild(elemento1);
      contenedorBtnSwitch.appendChild(elemento2);
      contenedorBtnSwitch.appendChild(elemento3);
      // Agregar el subtitulo al contenedor del botón y el switch
      contenedorBtn.appendChild(subtituloPildora);
      contenedorBtn.appendChild(contenedorBtnSwitch);
      // Agregar el contenedor del botón a la tarjetaPildora
      tarjetaPildora.appendChild(contenedorBtn);


      // Crear la tarjeta de selección de imagen
      // Crear la tarjeta principal que va a contener la sección de imagenes
      const tarjetaImagen = document.createElement('DIV');
      tarjetaImagen.classList.add('card', 'contenidos', `contenidos-tarjeta-${i+1}`, 'p-3', 'm-3');
      tarjetaImagen.setAttribute('data-contenedor', i+1);
      // Crear el contendor del título de la tarjeta de imagenes
      const tarjetaBodyImagen = document.createElement('DIV');
      tarjetaBodyImagen.classList.add('card-body');
      // Crear el título de la sección
      const tituloSeccionImagen = document.createElement('H4');
      tituloSeccionImagen.classList.add('card-title', 'text-center');
      tituloSeccionImagen.textContent = `Seleccionar Imagen`;
      // Crear el contenedor de los item-imagen
      const contenedorItems = document.createElement('DIV');
      contenedorItems.classList.add('row', 'justify-content-center', 'align-items-center', 'contenedor-btn-img');
      
      // Agregar el tituloSeccion a la tarjetaBody
      tarjetaBodyImagen.appendChild(tituloSeccionImagen);
      // Agregar tarjetaBody al contenedor principal
      tarjetaImagen.appendChild(tarjetaBodyImagen);
      // Agregar los items al contenedor de items. Se debe crear un bucle con la cantidad de imagenes para que cree los contenedores necesarios. Se añade el atributo data-imagen y se agrega cada item al contenedor de items
      for (let i = 0; i < numeroImagenes; i++) {
        // Crear los items
        const itemImagen = document.createElement('DIV');
        itemImagen.classList.add('col-5', 'item-imagen', 'm-2');
        itemImagen.setAttribute('data-imagen', i+1);
        // Agregamos el item al contenedor
        contenedorItems.appendChild(itemImagen);
        // Establecemos la imagen para el minicontenedor de la sección de selección
        itemImagen.style.backgroundImage = `url(./img/imagenes/${i+1}.jpg`;

        // Agregar el listener a la imagen para establecer la misma como fondo del contendor final sobre el que estamos trabajando
        itemImagen.addEventListener('click', (e) => {
          const imagenActual = document.querySelector(`.imagen-actual-${e.target.parentNode.parentNode.dataset.contenedor}`);
          const contenedoresFinales = document.querySelectorAll('.contenedores-finales');
          
          // Reglas la selección de imágenes
          // Obtengo el contenedor con el que estoy trabajando desde el dataset de la tarjeta de imagenes
          imagenActual.classList.remove('imagen-actual', `imagen-actual-${e.target.parentNode.parentNode.dataset.contenedor}`);
          e.target.classList.add('imagen-actual', `imagen-actual-${e.target.parentNode.parentNode.dataset.contenedor}`);
    
          // Selecciono el contenedor al que debo establecer la imagen
          const contenedor = contenedoresFinales[+e.target.parentNode.parentNode.dataset.contenedor-1];
          contenedor.style.backgroundImage = `url(./img/imagenes/${e.target.dataset.imagen}.jpg`;
          contenedor.style.backgroundSize = 'cover';
          contenedor.style.backgroundPosition = 'center';
        });


      }
      // Agregar la clase de imagen-actual al primer hijo del contendor de items
      const primerItemImagen = contenedorItems.firstChild;
      primerItemImagen.classList.add('imagen-actual', `imagen-actual-${i+1}`);
      // Agregar el contendor de los items a la tarjetaImagen
      tarjetaImagen.appendChild(contenedorItems);


      // Crear la tarjeta de texto
      // Crear la tarjeta principal que va a contener la sección de imagenes
      const tarjetaTexto = document.createElement('DIV');
      tarjetaTexto.classList.add('card', 'contenidos', `contenidos-tarjeta-${i+1}`, 'p-3', 'm-3', 'd-none');
      tarjetaTexto.setAttribute('data-contenedor', i+1);
      // Crear el contendor del título de la tarjeta de imagenes
      const tarjetaBodyTexto = document.createElement('DIV');
      tarjetaBodyTexto.classList.add('card-body');
      // Crear el título de la sección
      const tituloSeccionTexto = document.createElement('H4');
      tituloSeccionTexto.classList.add('card-title', 'text-center');
      tituloSeccionTexto.textContent = `Mensaje del Contenedor ${i+1}`;
      const contenedorTextarea = document.createElement('DIV');
      contenedorTextarea.classList.add('row', 'justify-content-center', 'align-items-center');
      // Crear el textarea del mensaje
      const textareaMensaje = document.createElement('TEXTAREA');
      textareaMensaje.classList.add('w-100', 'oswald', 'm-2', `texto-actual-${i+1}`);
      textareaMensaje.setAttribute('placeholder', 'Escribe tu mensaje AQUI');
      textareaMensaje.rows = '5';
      textareaMensaje.setAttribute('maxlength', '188');
      textareaMensaje.setAttribute('data-contenedor', i+1);

      // Agregar el listener para el textarea del mensaje
      textareaMensaje.addEventListener('click', (e) => {
        const textareaContenidoActual = document.querySelector(`.texto-actual-${e.target.parentNode.parentNode.dataset.contenedor}`);
        const contenedoresFinales = document.querySelectorAll('.contenedores-finales');

        // Recorrer los textarea y modificar las clases según el color del contenedor final
        if (contenedoresFinales[+e.target.parentNode.parentNode.dataset.contenedor-1].parentNode.classList.contains('contenedor-1')) {
          contenedoresFinales[+e.target.parentNode.parentNode.dataset.contenedor-1].classList.remove('texto-1');  
          contenedoresFinales[+e.target.parentNode.parentNode.dataset.contenedor-1].classList.add('texto-7', 'p-3', 'text-center', 'fw-bold');
        } else {
          contenedoresFinales[+e.target.parentNode.parentNode.dataset.contenedor-1].classList.remove('texto-7');  
          contenedoresFinales[+e.target.parentNode.parentNode.dataset.contenedor-1].classList.add('texto-1', 'p-3', 'text-center', 'fw-bold');
        }
        // Agregar el listener al textarea, con el evento input para que agregue el texto al contenedor final
        textareaContenidoActual.addEventListener('input', () => {
          contenedoresFinales[+e.target.parentNode.parentNode.dataset.contenedor-1].textContent = textareaContenidoActual.value;
        });
      });
      
      // agregar el textarea al contenedor
      contenedorTextarea.appendChild(textareaMensaje);
      // Agregar el tituloSeccion a la tarjetaBody
      tarjetaBodyTexto.appendChild(tituloSeccionTexto);
      // Agregar tarjetaBody al contenedor principal
      tarjetaTexto.appendChild(tarjetaBodyTexto);
      tarjetaTexto.appendChild(contenedorTextarea);

      // Agregar el botón píldora al contenedor maestro
      contenedorMaestro.appendChild(tarjetaPildora);
      contenedorMaestro.appendChild(tarjetaImagen);
      contenedorMaestro.appendChild(tarjetaTexto);
    }      
  }

  // Agregar el contenedor maestro al menú lateral
  menuLateral.appendChild(contenedorMaestro);
}

export {
  generaOpcionesAdicionales
}