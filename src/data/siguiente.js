export function siguiente() {
  document.addEventListener('DOMContentLoaded', function() {
    var botonSiguiente = document.getElementById("siguiente");
    botonSiguiente.onclick = function() {
      var paginaActual = localStorage.getItem('navegacion');
      if (paginaActual === '/tdah') {
        window.location.href = '/anobuli';
        localStorage.setItem('navegacion', '/anobuli');
      } else if (paginaActual === '/depresion') {
        window.location.href = '/tdah';
        localStorage.setItem('navegacion', '/tdah');
      } else {
        window.location.href = '/depresion';
        localStorage.setItem('navegacion', '/depresion');
      }
    }
    if (window.location.href.endsWith('/anobuli')) {
      botonSiguiente.disabled = true;
      botonSiguiente.style.display = "none";
    }
  });
}