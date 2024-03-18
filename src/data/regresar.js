
export function regresar() {
    document.addEventListener("DOMContentLoaded", function() {
      document.getElementById("regresar").addEventListener("click", function() {
        window.history.back();
      });
    });
  }
  
