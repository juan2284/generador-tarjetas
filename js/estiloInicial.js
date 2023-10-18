function estableceEstilo() {
  // Seleccionar los identificadores de cada uno de los contenedores que hay que revisar
  // Seleccionamos el lienzo y el color que actualmente presenta el mismo
  const lienzo              = document.querySelector('.lienzo');
  const colorActual         = document.querySelector('.fondo-actual');
  // Seleccionaos el motivo actual y el lienzo motivo, además de la opacidad necesaria para establecer el motivo seleccionado
  const lienzoMotivo        = document.querySelector('.lienzo-motivo');
  const motivoActual        = document.querySelector('.motivo-actual');
  const rangoOpacidad       = document.querySelector('.opacidad');
  // Seleccionamos la frase principal y el color actual de la frase
  const textoPrincipal      = document.querySelector('.texto-principal');
  const colorTextoActual    = document.querySelector('.texto-actual');
  const fuenteActual        = document.querySelector('.fuente-actual');
  const sizeActual          = document.querySelector('.size-actual');
  const fraseActual         = document.querySelector('.frase-actual');
  // Seleccionamos el fondo del layout actual y el color de contraste que lo necesitamos tanto para el color del layout como para el color del motivo en el lienzo-motivo. El layout lo seleccionamos según la distribución actual
  const seccionPrincipal    = document.querySelector('.seccion-principal-actual');
  const layout              = document.querySelector(`.layout`);
  const contrasteActual     = document.querySelector('.contraste-actual');
  const contenedores        = document.querySelectorAll('.contenedores');
  const contenedoresFinales = document.querySelectorAll('.contenedores-finales');
  const contenedorActual    = document.querySelector('.contenedor-actual');

  // Debemos revisar si la opción de color actual está en transparente para adaptar los estilos correspondientes
  if (colorActual.dataset.fondo === 'fondo-11') {
    // Eliminamos el color asignado
    lienzo.classList.remove(colorActual.dataset.fondo);
    // Eliminamos el motivo del lienzo
    lienzoMotivo.removeAttribute('style');
    // Agregamos la clase transparente al lienzo
    lienzo.classList.add('transparente');
    
  } else {
    // Eliminamos la clase del color
    lienzo.classList.remove(colorActual.dataset.fondo);
    // Eliminamos la clase transparente si está asignada en el lienzo
    lienzo.classList.remove('transparente');
    // Agregamos la clase del color actual
    lienzo.classList.add(colorActual.dataset.fondo);

    // Agregamos el motivo con los colores y opacidad actuales al lienzo
    lienzoMotivo.style.background = `url(./img/fondos/motivo-${motivoActual.dataset.motivo}-${contrasteActual.dataset.contraste}-${rangoOpacidad.value}.png)`;
    lienzoMotivo.style.backgroundSize = 'cover';
  }

  // Debemos revisar si la opción de color actual está en transparente para adaptar los estilos correspondientes
  if (contrasteActual.dataset.contraste === 'contraste-11') {
    // Eliminamos el color asignado
    seccionPrincipal.classList.remove(contrasteActual.dataset.contraste);
    // Eliminamos el motivo del layout
    layout.removeAttribute('style');
    // Agregamos la clase transparente al lienzo
    seccionPrincipal.classList.add('transparente');
  } else {
    // Eliminamos la clase de color de la seccion principal
    seccionPrincipal.classList.remove(contrasteActual.dataset.contraste);
    // Eliminamos la clase transparente por si la tiene
    seccionPrincipal.classList.remove('transparente');
    // Agregamos la clase de color actual
    seccionPrincipal.classList.add(contrasteActual.dataset.contraste);

    // Agregamos el motivo con los colores y opacidad actuales al layout
    if (colorActual.dataset.fondo.slice(-2).includes('-')) {
      // Si incluye el caracter, entonces se trata de un número del 0-9, por lo que puedo recortar solo un espacio
      layout.style.background = `url(./img/fondos/motivo-${motivoActual.dataset.motivo}-contraste-${colorActual.dataset.fondo.slice(-1)}-${rangoOpacidad.value}.png)`;
      layout.style.backgroundSize = 'cover';
    } else {
      // Si no incluye el caracter, entonces se trata de un dos números, por lo que debo recortar dos espacios
      layout.style.background = `url(./img/fondos/motivo-${motivoActual.dataset.motivo}-contraste-${colorActual.dataset.fondo.slice(-2)}-${rangoOpacidad.value}.png)`;
      layout.style.backgroundSize = 'cover';
    }
  }

  // Debemos revisar si la opción de color actual está en transparente para adaptar los estilos correspondientes
  if (contenedorActual.dataset.contenedor === 'contenedor-11') {
    // Como son varios contenedores, los seleccionamos todos y usamos un foreach para recorrerlos
    contenedores.forEach(contenedor => {
      // Eliminamos el color asignado
      contenedor.classList.remove(contenedorActual.dataset.contenedor);
      // Agregamos la clase transparente a los contenedores
      contenedor.classList.add('transparente');        
    });
    // Eliminamos el motivo de los contenedores finales
    contenedoresFinales.forEach(contenedorFinal => {
      contenedorFinal.removeAttribute('style');
    });
  } else {
    contenedores.forEach(contenedor => {
      // Eliminamos la clase de color de los contenedores
      contenedor.classList.remove(contenedorActual.dataset.contenedor);
      // Eliminamos la clase transparente por si la tiene
      contenedor.classList.remove('transparente');
      // Agregamos la clase de color actual
      contenedor.classList.add(contenedorActual.dataset.contenedor);
    });
    // Agregamos el motivo con los colores y opacidad actuales a los contenedores finales
    contenedoresFinales.forEach(contenedorFinal => {
      contenedorFinal.style.background = `url(./img/fondos/motivo-${motivoActual.dataset.motivo}-${contrasteActual.dataset.contraste}-${rangoOpacidad.value}.png)`;
      contenedorFinal.style.backgroundSize = 'cover';
      contenedorFinal.style.boxShadow = '10px 10px 30px 2px #00000044';
    });
  }

  textoPrincipal.classList.add(colorTextoActual.dataset.texto, fuenteActual.dataset.fuente, sizeActual.dataset.size);
  if (fraseActual.dataset.frase === 7) {
    textoPrincipal.textContent = fraseActual.value;      
  } else {
    textoPrincipal.textContent = fraseActual.textContent;   
  }
}

export {
  estableceEstilo
}