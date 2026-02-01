const CACHE_NAME = 'coopec-v1';

// On n'installe rien de spécifique au début pour éviter les erreurs de cache
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// CETTE PARTIE EST OBLIGATOIRE POUR LE BOUTON D'INSTALLATION
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
    );
});
