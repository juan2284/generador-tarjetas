function funcionalidadBtnSwitch () {
  // Seleccionar todos los botones switch
  const botonesSwitch = document.querySelectorAll('.switch');

  // Recorrer los switch generados según el layout
  botonesSwitch.forEach(botonSwitch => {
    // Agregar los listeners a cada switch
    botonSwitch.addEventListener('click', (e) => {
      // seleccionar el elemento al que se le hizo click. Se seleccionan varias opciones pues existen diferentes superficies sobre las que hacer click en el botón. La idea es cubrir cada lugar del botón para que la página no caiga si se hace click en el botón
      const tapaSwitch = document.querySelector(`.contenidos-tarjeta-${e.target.parentNode.dataset.contenedor} .switch .btn-switch`) || document.querySelector(`.contenidos-tarjeta-${e.target.parentNode.dataset.contenedor} .switch .btn-switch-derecha`);
      // Obtenemos el número del contenedor clickado
      const contenedorClickado = e.target.parentNode.dataset.contenedor || e.target.dataset.contenedor;
      // Obtenemos el contenedor de la selección de imagenes y del texto del contenedor clickado para mostrar/ocultar las secciones correspondientes
      const seleccionImagen = document.querySelector(`.imagen-actual-${contenedorClickado}`).parentNode.parentNode;
      const seleccionTexto = document.querySelector(`.texto-actual-${contenedorClickado}`).parentNode.parentNode;
      // Obtenemos los contenedores finales a los que se aplicarán los cambios que se hagan en las secciones correspondientes (Agregar una imagen o agregar texto)
      const contenedoresFinales = document.querySelectorAll('.contenedores-finales');
      const contenedorFinal = contenedoresFinales[+botonSwitch.dataset.contenedor-1];
      const motivoActual = document.querySelector('.motivo-actual');
      const contrasteActual = document.querySelector('.contraste-actual');
      const rangoOpacidad = document.querySelector('.opacidad');
      
      // Cambiar la clase del botón para que oscile entre la izquierda y la derecha al hacer click en él
      tapaSwitch.classList.toggle('btn-switch');
      tapaSwitch.classList.toggle('btn-switch-derecha');

      // Seleccionar el conteendor del ícono de imagen
      const paisajeSq = document.querySelector(`.contenidos-tarjeta-${e.target.parentNode.dataset.contenedor} .switch .btn-switch-derecha`);
      // Condicional para revisar cual de las dos secciones del botón está visible (imagen/texto)
      if (paisajeSq) {
        seleccionImagen.classList.remove('d-none');
        seleccionTexto.classList.add('d-none');
        // Limpiar los contenedores para los cambios que se hagan al dar click en el botón de switch
        contenedorFinal.textContent = '';
        contenedorFinal.style.background = `url(./img/fondos/motivo-${motivoActual.dataset.motivo}-${contrasteActual.dataset.contraste}-${rangoOpacidad.value}.png)`;
        contenedorFinal.style.backgroundSize = 'cover';
      } else {
        seleccionTexto.classList.remove('d-none');
        seleccionImagen.classList.add('d-none');
        // Limpiar los contenedores para los cambios que se hagan al dar click en el botón de switch
        contenedorFinal.style.background = `url(./img/fondos/motivo-${motivoActual.dataset.motivo}-${contrasteActual.dataset.contraste}-${rangoOpacidad.value}.png)`;
        contenedorFinal.style.backgroundSize = 'cover';
        
        if (contenedorFinal.parentNode.classList.contains('contenedor-1')) {
          contenedorFinal.classList.remove('texto-1');  
          contenedorFinal.classList.add('texto-7', 'p-3', 'text-center', 'fw-bold');
        } else {
          contenedorFinal.classList.remove('texto-7');  
          contenedorFinal.classList.add('texto-1', 'p-3', 'text-center', 'fw-bold');
        }
      }
    });
  });
}

export {
  funcionalidadBtnSwitch
}