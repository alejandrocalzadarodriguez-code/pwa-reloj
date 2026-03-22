####⏰ PWA Reloj
Aplicación Web Progresiva (PWA) que muestra la hora actual del sistema y se actualiza automáticamente cada segundo.
Este proyecto forma parte de la actividad práctica de la materia Desarrollo Móvil.

####📱 Características principales
✔ Muestra la hora actual (horas, minutos y segundos).
✔ Actualización automática cada 1 segundo.
✔ Implementación de un Service Worker para funcionamiento offline.
✔ Instalable como aplicación en dispositivos móviles y computadoras.
✔ Utiliza un archivo de manifiesto (manifest.json) con iconos y configuración de app.
✔ Código simple en HTML + CSS + JavaScript puro, sin frameworks.

####📁 Estructura del proyecto
pwa-reloj
│── index.html
│── style.css
│── app.js
│── sw.js
│── manifest.json
│── /Recuros/Iconos
│     ├── icon-192.svg
│     └── icon-512.svg


####🚀 Cómo ejecutar el proyecto
Para que la PWA funcione correctamente (especialmente el Service Worker), debe ejecutarse desde un servidor local.

Live Server (VS Code)

Abrir el proyecto en Visual Studio Code
Instalar la extensión Live Server
Clic derecho en index.html → Open with Live Server
Se abrirá una URL similar a:

http://127.0.0.1:5500/



####📦 Archivos importantes

🟦 index.html
Estructura principal de la aplicación y registro del Service Worker.

🎨 style.css
Diseño moderno con degradados, tarjeta translúcida y tipografía limpia.

🕒 app.js
Lógica para actualizar la hora cada segundo.

🛡 sw.js
Service Worker encargado de:

cachear archivos
permitir funcionamiento offline
acelerar carga de la app

####📱 manifest.json
Configuración que permite instalar la PWA con:

nombre
colores
iconos
modo standalone

####🎨 Iconos SVG
Iconos de la aplicación en tamaños 192 y 512.

####📥 Instalación como PWA

Ejecutar la app en navegador (Chrome recomendado).
En la barra de direcciones aparecerá el botón de Instalar.
También puede instalarse desde el menú del navegador:
⋮ → Instalar aplicación
En móvil, Chrome mostrará un mensaje para Agregar a la pantalla de inicio.


####🌐 Funcionamiento offline
Gracias al Service Worker, la PWA puede:

Cargar sin conexión a internet
Mostrar últimos archivos cacheados
Iniciar como app instalada


####🔧 Extensiones recomendadas para Visual Studio Code
Para facilitar el desarrollo, mejorar la legibilidad del código y acelerar tu flujo de trabajo, se recomienda instalar las siguientes extensiones:
####⭐ Extensiones útiles

Prettier – Code Formatter
Formatea automáticamente tu código para mantener un estilo limpio y uniforme.

Console Ninja
Muestra la salida de la consola directamente dentro del editor, muy útil para depurar JavaScript.

Symbols
Mejora la visualización de símbolos y estructuras del proyecto, facilitando la navegación.

Project Manager
Permite gestionar múltiples proyectos y cambiar entre ellos rápidamente.

Live Server
Inicia un servidor local y recarga la página automáticamente cada vez que guardas los archivos.
Ideal para correr esta PWA durante el desarrollo.

####🎯 Objetivo académico
Este proyecto demuestra los conocimientos adquiridos en:

Desarrollo de aplicaciones web móviles
Arquitectura PWA
Service Workers
Manifest.json
Cache de activos
Diseño responsivo
Buenas prácticas en desarrollo móvil


####🧑‍💻 Autor
Alejandro Calzada Rodríguez
Maestría IUV – Trimestre 3
Materia: Desarrollo Móvil

####📜 Licencia
Proyecto académico. Uso libre para fines educativos.