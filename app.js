function actualizarHora() {                     // Declara la función que actualizará la hora en pantalla
    const reloj = document.getElementById("clock"); // Obtiene el elemento con id "clock" del DOM
    const ahora = new Date();                      // Crea un objeto Date con la fecha y hora actuales

    const hh = String(ahora.getHours()).padStart(2, "0");   // Extrae la hora, la convierte a texto y agrega 0 si falta
    const mm = String(ahora.getMinutes()).padStart(2, "0"); // Extrae los minutos, convierte a texto y asegura 2 dígitos
    const ss = String(ahora.getSeconds()).padStart(2, "0"); // Extrae los segundos, convierte a texto y asegura 2 dígitos

    reloj.textContent = `${hh}:${mm}:${ss}`;  // Inserta la hora formateada dentro del elemento #clock
}                                             // Fin de la función

setInterval(actualizarHora, 1000);            // Ejecuta actualizarHora cada 1000 ms (1 segundo)
actualizarHora();                             // Llama la función una vez para mostrar hora inmediata