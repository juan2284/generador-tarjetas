function listenersFondo () {
  const opcionesFondo = document.querySelectorAll('.item-fondo');

  // Recorremos las opciones
  opcionesFondo.forEach(opcion => {
    // Agregamos el listener a cada opción
    opcion.addEventListener('click', (e) => {
      const lienzo = document.querySelector('.lienzo');
      const lienzoMotivo = document.querySelector('.lienzo-motivo');
      const fondoActual = document.querySelector('.fondo-actual');
      const contrasteActual = document.querySelector('.contraste-actual');
      const motivoActual = document.querySelector('.motivo-actual');
      const rangoOpacidad = document.querySelector('.opacidad');
      const layout = document.querySelector('.layout');

      // Marcamos la opción a la que se le dio click como la opción actual, y eliminamos la marca de la opción anterior
      fondoActual.classList.remove('fondo-actual');
      e.target.classList.add('fondo-actual');

      // Si la opción marcada es fondo-11, entonces es la opción para eliminar el color del contenedor
      if (e.target.dataset.fondo === 'fondo-11') {
        // Removemos la clase de color del lienzo y le agregamos la clase transparente
        lienzo.classList.remove(fondoActual.dataset.fondo);
        lienzo.classList.add('transparente');

        // Al quitar el color del fondo no tiene sentido que el layout conserve el motivo, pues su color dependerá del color de fondo
        layout.removeAttribute('style');
        lienzoMotivo.removeAttribute('style');
      } else {
        // Si la opción seleccionada es cualquiera de los otros colores, removemos las clases de color anteriores, y la clase transparente en caso de poseerla
        lienzo.classList.remove(fondoActual.dataset.fondo);
        lienzo.classList.remove('transparente');
        // Agregamos la clase del color seleccionado
        lienzo.classList.add(e.target.dataset.fondo);          

        // Debemos reasignar los motivos para el caso de que hayan sido removidos por la clase transparente 
        lienzoMotivo.style.backgroundImage = `url(./img/fondos/motivo-${motivoActual.dataset.motivo}-${contrasteActual.dataset.contraste}-${rangoOpacidad.value}.png)`;
        lienzoMotivo.style.backgroundSize = 'cover';

       // Agregamos al layout el motivo con el color de fondo seleccionado. Debemos comprobar el color seleccionado ya que si el color tiene dos números en la clase de identificación del color, al recortar con slice() debemos revisar esto para poder establecer el motivo correcto. 
        if (e.target.dataset.fondo.slice(-2).includes('-')) {
          // Establecemos el motivo del layout según el color de fondo elegido. Este caso se trata de los colores numerados del 1 al 9
          layout.style.backgroundImage = `url(./img/fondos/motivo-${motivoActual.dataset.motivo}-contraste-${e.target.dataset.fondo.slice(-1)}-${rangoOpacidad.value}.png)`;
          layout.style.backgroundSize = 'cover';
        } else {
          // Establecemos el motivo del layout según el color de fondo elegido. Este caso se trata de los colores numerados desde el 10
          layout.style.backgroundImage = `url(./img/fondos/motivo-${motivoActual.dataset.motivo}-contraste-${e.target.dataset.fondo.slice(-2)}-${rangoOpacidad.value}.png)`;
          layout.style.backgroundSize = 'cover';
        }
      }
    });
  });
}

function listenersContraste () {
  const opcionesContraste = document.querySelectorAll('.item-contraste');

  // Recorremos las opciones
  opcionesContraste.forEach(opcion => {
    // Agregamos el listener a cada opción
    opcion.addEventListener('click', (e) => {
      const lienzoMotivo = document.querySelector('.lienzo-motivo');
      const fondoActual = document.querySelector('.fondo-actual');
      const motivoActual = document.querySelector('.motivo-actual');
      const rangoOpacidad = document.querySelector('.opacidad');
      const contrasteActual = document.querySelector('.contraste-actual');
      const seccionPrincipalActual = document.querySelector('.seccion-principal-actual');
      const layout = document.querySelector('.layout');
      const contenedoresFinales = document.querySelectorAll('.contenedores-finales');

      // Marcamos la opción a la que se le dio click como la opción actual, y eliminamos la marca de la opción anterior
      contrasteActual.classList.remove('contraste-actual');
      e.target.classList.add('contraste-actual');

      // Si la opción marcada es contraste-11, entonces es la opción para eliminar el color del contenedor
      if (e.target.dataset.contraste === 'contraste-11') {
        // Removemos la clase de color del contenedor y le agregamos la clase transparente
        seccionPrincipalActual.classList.remove(contrasteActual.dataset.contraste);
        seccionPrincipalActual.classList.add('transparente');

        // Al quitar el color del contraste no tiene sentido que el layout conserve el motivo, pues se verá sobre el motivo del lienzo, lo mismo pasa con el lienzo-motivo y con el motivo de los contenedores
        lienzoMotivo.removeAttribute('style');
        layout.removeAttribute('style');
        contenedoresFinales.forEach(contenedorFinal => {
          contenedorFinal.removeAttribute('style');
        });
      } else {
        // Al lienzo motivo le ponemos el motivo con el color de contraste seleccionado
        lienzoMotivo.style.backgroundImage = `url(./img/fondos/motivo-${motivoActual.dataset.motivo}-${e.target.dataset.contraste}-${rangoOpacidad.value}.png)`;
        lienzoMotivo.style.backgroundSize = 'cover';

        // Eliminamos las clases de color actual y la clase transparente, y agregamos la clase de color seleccionado
        seccionPrincipalActual.classList.remove(contrasteActual.dataset.contraste);
        seccionPrincipalActual.classList.remove('transparente');
        seccionPrincipalActual.classList.add(e.target.dataset.contraste);

        // Agregamos al layout el motivo con el color de fondo seleccionado. Debemos comprobar el color seleccionado ya que si el color tiene dos números en la clase de identificación del color, al recortar con slice() debemos revisar esto para poder establecer el motivo correcto.
        if (fondoActual.dataset.fondo.slice(-2).includes('-')) {
          layout.style.backgroundImage = `url(./img/fondos/motivo-${motivoActual.dataset.motivo}-contraste-${fondoActual.dataset.fondo.slice(-1)}-${rangoOpacidad.value}.png)`;
          layout.style.backgroundSize = 'cover';
        } else {
          layout.style.backgroundImage = `url(./img/fondos/motivo-${motivoActual.dataset.motivo}-contraste-${fondoActual.dataset.fondo.slice(-2)}-${rangoOpacidad.value}.png)`;
          layout.style.backgroundSize = 'cover';
        }

        // Agregamos el motivo al contenedor final con el color de contraste seleccionado
        contenedoresFinales.forEach(contenedorFinal => {
          contenedorFinal.style.backgroundImage = `url(./img/fondos/motivo-${motivoActual.dataset.motivo}-${e.target.dataset.contraste}-${rangoOpacidad.value}.png)`;
          contenedorFinal.style.backgroundSize = 'cover';
        });
      }
    });
  });
}

function listenersContenedores () {
  const opcionesContenedor = document.querySelectorAll('.item-contenedor');

  // Recorremos las opciones
  opcionesContenedor.forEach(opcion => {
    // Agregamos el listener a cada opción
    opcion.addEventListener('click', (e) => {
      const contenedorActual = document.querySelector('.contenedor-actual');
      const contenedores = document.querySelectorAll('.contenedores');
      const contenedoresFinales = document.querySelectorAll('.contenedores-finales');
      const motivoActual = document.querySelector('.motivo-actual');
      const rangoOpacidad = document.querySelector('.opacidad');
      const contrasteActual = document.querySelector('.contraste-actual');

      // Marcamos la opción a la que se le dio click como la opción actual, y eliminamos la marca de la opción anterior
      contenedorActual.classList.remove('contenedor-actual');
      e.target.classList.add('contenedor-actual');

      // Si la opción marcada es contraste-11, entonces es la opción para eliminar el color del contenedor
      if (e.target.dataset.contenedor === 'contenedor-11') {
        contenedores.forEach(contenedor => {
          // Removemos la clase de color del contenedor y le agregamos la clase transparente
          contenedor.classList.remove(contenedorActual.dataset.contenedor);
          contenedor.classList.add('transparente');
        });
        // Eliminamos el motivo del contendor final
        contenedoresFinales.forEach(contenedorFinal => {
          contenedorFinal.removeAttribute('style');             
        });
      } else {
        // Eliminamos las clases de color actual y la clase transparente, y agregamos la clase de color seleccionado
        contenedores.forEach(contenedor => {
          contenedor.classList.remove('transparente');
          contenedor.classList.remove(contenedorActual.dataset.contenedor);
          contenedor.classList.add(e.target.dataset.contenedor);
        });

        // establecemos el motivo con el color seleccionado al contenedor final
        contenedoresFinales.forEach(contenedorFinal => {
          contenedorFinal.style.backgroundImage = `url(./img/fondos/motivo-${motivoActual.dataset.motivo}-${contrasteActual.dataset.contraste}-${rangoOpacidad.value}.png)`;
          contenedorFinal.style.backgroundSize = 'cover';
        });

        contenedoresFinales.forEach(contenedorFinal => {
          if (contenedorFinal.parentNode.classList.contains('contenedor-1')) {
            contenedorFinal.classList.remove('texto-1');  
            contenedorFinal.classList.add('texto-7', 'p-3', 'text-center', 'fw-bold');
          } else {
            contenedorFinal.classList.remove('texto-7');  
            contenedorFinal.classList.add('texto-1', 'p-3', 'text-center', 'fw-bold');
          }
        });
      }

    });
  });
}

function listenersMotivos () {
  const opcionesMotivos = document.querySelectorAll('.item-motivo');

  // Recorremos las opciones
  opcionesMotivos.forEach(opcion => {
    // Agregamos el listener a cada opción
    opcion.addEventListener('click', (e) => {
      const lienzoMotivo = document.querySelector('.lienzo-motivo');
      const layout = document.querySelector('.layout');
      const contenedoresFinales = document.querySelectorAll('.contenedores-finales');
      const fondoActual = document.querySelector('.fondo-actual');
      const rangoOpacidad = document.querySelector('.opacidad');
      const contrasteActual = document.querySelector('.contraste-actual');
      const motivoActual = document.querySelector('.motivo-actual');

      // Marcamos la opción a la que se le dio click como la opción actual, y eliminamos la marca de la opción anterior
      motivoActual.classList.remove('motivo-actual');
      e.target.classList.add('motivo-actual');

      // Cambiar el motivo del lienzo-motivo
      lienzoMotivo.style.backgroundImage = `url(./img/fondos/motivo-${e.target.dataset.motivo}-${contrasteActual.dataset.contraste}-${rangoOpacidad.value}.png)`;
      lienzoMotivo.style.backgroundSize = 'cover';

      // Cambiar el motivo del layout
      if (fondoActual.dataset.fondo.slice(-2).includes('-')) {
        layout.style.backgroundImage = `url(./img/fondos/motivo-${e.target.dataset.motivo}-contraste-${fondoActual.dataset.fondo.slice(-1)}-${rangoOpacidad.value}.png)`;
        layout.style.backgroundSize = 'cover';
      } else {
        layout.style.backgroundImage = `url(./img/fondos/motivo-${e.target.dataset.motivo}-contraste-${fondoActual.dataset.fondo.slice(-2)}-${rangoOpacidad.value}.png)`;
        layout.style.backgroundSize = 'cover';
      }

      // Cambiar el motivo de los contenedores finales
      contenedoresFinales.forEach(contenedorFinal => {
        contenedorFinal.style.backgroundImage = `url(./img/fondos/motivo-${e.target.dataset.motivo}-${contrasteActual.dataset.contraste}-${rangoOpacidad.value}.png)`;
        contenedorFinal.style.backgroundSize = 'cover';          
      });
    });
  });
}

function listenerOpacidad () {
  const rangoOpacidad = document.querySelector('.opacidad');

  // Agregamos el listener al rango
  rangoOpacidad.addEventListener('change', () => {
    const lienzoMotivo = document.querySelector('.lienzo-motivo');
    const layout = document.querySelector('.layout');
    const contenedoresFinales = document.querySelectorAll('.contenedores-finales');
    const fondoActual = document.querySelector('.fondo-actual');
    const rangoOpacidad = document.querySelector('.opacidad');
    const contrasteActual = document.querySelector('.contraste-actual');
    const motivoActual = document.querySelector('.motivo-actual');

    // Cambiar el motivo del lienzo-motivo
    lienzoMotivo.style.backgroundImage = `url(./img/fondos/motivo-${motivoActual.dataset.motivo}-${contrasteActual.dataset.contraste}-${rangoOpacidad.value}.png)`;
    lienzoMotivo.style.backgroundSize = 'cover';

    // Cambiar el motivo del layout
    if (fondoActual.dataset.fondo.slice(-2).includes('-')) {
      layout.style.backgroundImage = `url(./img/fondos/motivo-${motivoActual.dataset.motivo}-contraste-${fondoActual.dataset.fondo.slice(-1)}-${rangoOpacidad.value}.png)`;
      layout.style.backgroundSize = 'cover';
    } else {
      layout.style.backgroundImage = `url(./img/fondos/motivo-${motivoActual.dataset.motivo}-contraste-${fondoActual.dataset.fondo.slice(-2)}-${rangoOpacidad.value}.png)`;
      layout.style.backgroundSize = 'cover';
    }

    // Cambiar el motivo de los contenedores finales
    contenedoresFinales.forEach(contenedorFinal => {
      contenedorFinal.style.backgroundImage = `url(./img/fondos/motivo-${motivoActual.dataset.motivo}-${contrasteActual.dataset.contraste}-${rangoOpacidad.value}.png)`;
      contenedorFinal.style.backgroundSize = 'cover';          
    });
  });
}

export {
  listenersFondo,
  listenersContraste,
  listenersContenedores,
  listenersMotivos,
  listenerOpacidad
}