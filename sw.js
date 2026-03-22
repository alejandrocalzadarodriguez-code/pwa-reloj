const CACHE_NAME = "pwa-reloj-cache-v1";                    // Nombre del caché donde se guardarán los archivos

const FILES_TO_CACHE = [                                    // Lista de archivos que la PWA almacenará para usar offline
    "index.html",                                           // Archivo principal de la página
    "style.css",                                            // Hoja de estilos
    "app.js",                                               // Lógica del reloj
    "manifest.json",                                        // Configuración de la PWA
    "icons/icon-192.svg",                                   // Icono para dispositivos (tamaño 192px)
    "icons/icon-512.svg"                                    // Icono para dispositivos (tamaño 512px)
];

self.addEventListener("install", event => {                 // Evento que se ejecuta al instalar el Service Worker
    event.waitUntil(                                        // Espera hasta que la promesa interna termine
        caches.open(CACHE_NAME).then(cache => {             // Abre (o crea) el caché con el nombre indicado
            console.log("Archivos cacheados");              // Mensaje en consola indicando que se almacenaron los archivos
            return cache.addAll(FILES_TO_CACHE);            // Agrega todos los archivos definidos al caché
        })
    );
});

self.addEventListener("activate", () => {                   // Evento que se ejecuta cuando el SW se activa
    console.log("Service Worker activo");                   // Mensaje indicando activación
});

self.addEventListener("fetch", event => {                   // Intercepta todas las peticiones (fetch) de la página
    event.respondWith(                                      // Responde con un recurso desde caché o desde la red
        caches.match(event.request).then(response => {      // Busca si el recurso solicitado está en caché
            return response || fetch(event.request);        // Si existe lo devuelve; si no, lo pide a la red
        })
    );
});