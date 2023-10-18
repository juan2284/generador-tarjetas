// Función que crea el diseño de la tarjet según la cantidad de contenedores elegida por el usuario
function crearLayout(layoutActual){
  // Obtener el lienzo-motivo
  const lienzoMotivo = document.querySelector('.lienzo-motivo');
  // Crear la sección principal del layout
  const seccionPrincipal = document.createElement('SECTION');
  seccionPrincipal.classList.add('seccion-principal', 'p-0', 'm-0', 'tarjeta-1', 'seccion-principal-actual');

  // Crear el contenedor de los mini contenedores
  const contenedorPrincipal = document.createElement('DIV');
  contenedorPrincipal.classList.add('layout', 'seccion-actual', 'row', 'justify-content-around', 'align-items-center', 'p-0', 'm-0');

  switch (layoutActual) {
    case 1:
      // Crear mini contenedor
      const miniContenedor1 = document.createElement('DIV');
      miniContenedor1.classList.add('subseccion-1', 'contenedores', 'col-6', 'p-0');
  
      // Crear el contenedor para el motivo
      const motivoContenedor1 = document.createElement('DIV');
      motivoContenedor1.classList.add('subseccion-1', 'contenedores-finales', 'p-0', 'm-0');
  
      // Agregar el motivo contenedor al mini contenedor
      miniContenedor1.appendChild(motivoContenedor1);
      // Agregar mini contenedor al contenedor principal
      contenedorPrincipal.appendChild(miniContenedor1);
      break;

    case 2:
      // Crear mini contenedor
      const miniContenedor2 = document.createElement('DIV');
      miniContenedor2.classList.add('subseccion-2', 'contenedores', 'col-6', 'p-0');    
      // Crear el contenedor para el motivo
      const motivoContenedor2 = document.createElement('DIV');
      motivoContenedor2.classList.add('subseccion-2', 'contenedores-finales', 'p-0', 'm-0');    
      // Agregar el motivo contenedor al mini contenedor
      miniContenedor2.appendChild(motivoContenedor2);

      const miniContenedor3 = document.createElement('DIV');
      miniContenedor3.classList.add('subseccion-2', 'contenedores', 'col-6', 'p-0');    
      // Crear el contenedor para el motivo
      const motivoContenedor3 = document.createElement('DIV');
      motivoContenedor3.classList.add('subseccion-2', 'contenedores-finales', 'p-0', 'm-0');    
      // Agregar el motivo contenedor al mini contenedor
      miniContenedor3.appendChild(motivoContenedor3);

      // Agregar mini contenedor al contenedor principal
      contenedorPrincipal.appendChild(miniContenedor2);
      contenedorPrincipal.appendChild(miniContenedor3);
      break;
    case 3:
      // Crear mini contenedor
      const miniContenedor = document.createElement('DIV');
      miniContenedor.classList.add('subseccion-2', 'contenedores', 'col-6', 'p-0');
      // Crear el contenedor para el motivo
      const motivoContenedor = document.createElement('DIV');
      motivoContenedor.classList.add('subseccion-2', 'contenedores-finales', 'p-0', 'm-0');
      // Agregar el motivo contenedor al mini contenedor
      miniContenedor.appendChild(motivoContenedor);

      const contenedorMaestro = document.createElement('DIV');
      contenedorMaestro.classList.add('col-5', 'p-0', 'm-0', 'row', 'justify-content-center', 'align-items-center');
      
      const subtitulo = document.createElement('DIV');
      subtitulo.classList.add('subtitulo', 'contenedores', 'col-12', 'p-0');
      const motivoSubtitulo = document.createElement('DIV');
      motivoSubtitulo.classList.add('subtitulo', 'contenedores-finales', 'p-0', 'm-0', 'w-100', 'text-center');
      // Agregar el motivoSubtitulo al subtitulo
      subtitulo.appendChild(motivoSubtitulo);

      const mensaje = document.createElement('DIV');
      mensaje.classList.add('mensaje', 'contenedores', 'col-12', 'p-0', 'm-0');
      const motivoMensaje = document.createElement('DIV');
      motivoMensaje.classList.add('mensaje', 'contenedores-finales', 'p-0', 'm-0', 'w-100');
      // Agregar el motivoSubtitulo al subtitulo
      mensaje.appendChild(motivoMensaje);

      // Agregar subtitulo y mensaje al contenedor maestro
      contenedorMaestro.appendChild(subtitulo);
      contenedorMaestro.appendChild(mensaje);
      
      // Agregar mini contenedor al contenedor principal
      contenedorPrincipal.appendChild(miniContenedor);
      contenedorPrincipal.appendChild(contenedorMaestro);
      break;
    case 4:
      for (let i = 0; i < 4; i++) {
        // Crear mini contenedor
        const miniContenedor4 = document.createElement('DIV');
        miniContenedor4.classList.add('subseccion-3', 'contenedores', 'col-6', 'p-0');    
        // Crear el contenedor para el motivo
        const motivoContenedor4 = document.createElement('DIV');
        motivoContenedor4.classList.add('subseccion-3', 'contenedores-finales', 'p-0', 'm-0');    
        // Agregar el motivo contenedor al mini contenedor
        miniContenedor4.appendChild(motivoContenedor4);

        // Agregar mini contenedor al contenedor principal
        contenedorPrincipal.appendChild(miniContenedor4);
      }
      break;
    case 5:
      // Crear mini contenedor
      const miniContenedor5 = document.createElement('DIV');
      miniContenedor5.classList.add('subseccion-2', 'contenedores', 'col-6', 'p-0');
      // Crear el contenedor para el motivo
      const motivoContenedor5 = document.createElement('DIV');
      motivoContenedor5.classList.add('subseccion-2', 'contenedores-finales', 'p-0', 'm-0');
      // Agregar el motivo contenedor al mini contenedor
      miniContenedor5.appendChild(motivoContenedor5);

      // Agregar mini contenedor al contenedor principal
      contenedorPrincipal.appendChild(miniContenedor5);

      const contenedorMaestro5 = document.createElement('DIV');
      contenedorMaestro5.classList.add('col-5', 'p-0', 'm-0', 'row', 'justify-content-center', 'align-items-center');
      // Agregar el contenedor Maestro al contendor principal
      contenedorPrincipal.appendChild(contenedorMaestro5);

      // Crear los minicontendores de subtitulo
      for (let i = 0; i < 4; i++) {
        const subtitulo = document.createElement('DIV');
        subtitulo.classList.add('subtitulo', 'contenedores', 'col-12', 'p-0');
        const motivoSubtitulo = document.createElement('DIV');
        motivoSubtitulo.classList.add('subtitulo', 'contenedores-finales', 'p-0', 'm-0', 'w-100', 'text-center');
        // Agregar el motivoSubtitulo al subtitulo
        subtitulo.appendChild(motivoSubtitulo);

        contenedorMaestro5.appendChild(subtitulo);
      }
      break;    
    default:
      console.log('No se está seleccionando una distribución correcta.');
      break;
  }

  // Agregar el contenedor principal a la sección principal
  seccionPrincipal.appendChild(contenedorPrincipal);
  // Agregar la seccion principal al lienzo motivo
  lienzoMotivo.appendChild(seccionPrincipal);
}

export {
  crearLayout
}