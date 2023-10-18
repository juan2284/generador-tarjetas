import { crearLayout } from "./crearLayout.js";
import { listenersFondo, listenersContraste, listenersContenedores, listenersMotivos, listenerOpacidad } from "./listenersLayout.js";
import { listenerColorTexto, listenerFuenteTexto, listenerSizeTexto, listenerFrases } from "./listenersEncabezado.js";
import { generadorOpcionesMenu } from "./opcionesMenu.js";
import { generaOpcionesAdicionales } from "./opcionesContenedores.js";
import { estableceEstilo } from "./estiloInicial.js";
import { funcionalidadBtnSwitch } from "./btnSwitch.js";

document.addEventListener('DOMContentLoaded', () => {
  const paletaColores = [ 'blanco', 'ambar', 'amarantha', 'cadete-espacial', 'violeta', 'verde-neon', 'gris-plomo', 'purpura', 'azul-claro', 'naranja', 'transparent'];
  const listaFuentes = ['lobster', 'oswald', 'monkey', 'greyqo', 'montserrat-light', 'montserrat', 'rubik', 'updock'];  


  // Código para el botón de iniciar
  const btnIniciar = document.querySelector('.btn-iniciar');
  const presentacion = document.querySelector('.presentacion');
  btnIniciar.addEventListener('click', () => {
    presentacion.style.display = 'none';
  });


  // Llamar a la función que genera las opciones del menú
  generadorOpcionesMenu('Distribución del Lienzo', 5, 'distribucion');
  listenersDistribucion();

  // Función que agrega los eventListeners a las distribuciones
  function listenersDistribucion () {
    const opcionesDistribucion = document.querySelectorAll('.item-distribucion');

    // Recorremos las opciones
    opcionesDistribucion.forEach(opcion => {
      // Agregamos el listener a cada opción
      opcion.addEventListener('click', (e) => {
        const seccionPrincipalActual = document.querySelector('.seccion-principal-actual');
        const distribucionActual = document.querySelector('.distribucion-actual');
        const opcionesContenedoresFinales = document.querySelector('.contenedor-contenidos');

        // Marcamos la opción a la que se le dio click como la opción actual
        distribucionActual.classList.remove('distribucion-actual');
        e.target.classList.add('distribucion-actual');

        // Elimina las opciones adicionales para los contenedores adicionales y crea los necesarios para la distribución seleccionada
        // Llamar la función que genera las otras opciones principales del menú
        revisaMenu();
        
        // Verificamos que existe una sección actual, y en caso de ser asi, se elimina para que se pueda generar la nueva. Luego de generar la distribución seleccionada, llamamos la función que establece los estilos.
        if (seccionPrincipalActual) {
          seccionPrincipalActual.remove();
          // Llamamos la función que construye la distibución de la tarjeta y le pasamos el número de distribución
          crearLayout(+e.target.dataset.distribucion.slice(-1));
          estableceEstilo();
        } else {
          // Llamamos la función que construye la distibución de la tarjeta y le pasamos el número de distribución
          crearLayout(+e.target.dataset.distribucion.slice(-1));
          estableceEstilo();
        }
        
        if (opcionesContenedoresFinales) {
          opcionesContenedoresFinales.remove();
        }
        // Llamar a la función que genera las opciones adicionales
        generaOpcionesAdicionales(9);
        funcionalidadBtnSwitch();
      });
    });
  }

  function revisaMenu () {
    const distribucion =  document.querySelectorAll('.distribucion');

    // Revisamos si en el menú solo existe un contenedor, para generar las demás opciones. Si existen mas de uno, no las volvemos a generar
    if (distribucion.length === 1) {
      generadorOpcionesMenu('Color del Lienzo', paletaColores.length, 'fondo');
      listenersFondo();
      generadorOpcionesMenu('Color de Contraste', paletaColores.length, 'contraste');
      listenersContraste();
      generadorOpcionesMenu('Color de Mini Contenedores', paletaColores.length, 'contenedor');
      listenersContenedores();
      generadorOpcionesMenu('Motivos del Lienzo', 13, 'motivo');
      listenersMotivos();
      generadorOpcionesMenu('Opacidad del Motivo', 1, 'opacidad');
      listenerOpacidad();
      generadorOpcionesMenu('Color del Encabezado', 10, 'texto');
      listenerColorTexto();
      generadorOpcionesMenu('Fuente del Encabezado', listaFuentes.length, 'fuente');
      listenerFuenteTexto();
      generadorOpcionesMenu('Tamaño del Encabezado', 5, 'size');
      listenerSizeTexto();
      generadorOpcionesMenu('Frase Principal', 7, 'frase');
      listenerFrases();
    }
  }
});