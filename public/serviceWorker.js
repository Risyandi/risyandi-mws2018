let staticCacheName = "risyandi-mws-static";
// adding file 
let urlToCache = [
    '/index.html',
    '/style/style.css',
    '/script/initServiceWorker.js',
    '/images/favicon.ico',
    '/images/image-1.png',
    '/images/image-2.png',
    '/images/image-3.png',
    '/images/risyandi_logo.png',
    '/images/risyandi_profile.jpg',
];

//  Process listen install service worker
self.addEventListener('install', function (event) {
    console.log("run process installing");
    // event wait until process installing service worker
    event.waitUntil(
        caches.open(staticCacheName).then(function (cache) {
            return cache.addAll(urlToCache);
        })
    );
});

// Process listen activate service worker
self.addEventListener('activate', function (event) {
    console.log("run process activate");
    // event wait untill process activate service worker
    event.waitUntil(
        caches.keys().then(function (keyCache) {
            return Promise.all(
                keyCache.filter(function (cacheName) {
                    return cacheName.startsWith('risyandi-mws-') && cacheName != staticCacheName;
                }).map(function (cacheName) {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});

//  Process Listen fetching service worker
self.addEventListener('fetch', function (event) {
    console.log("run process fetching");
    event.respondWith(
        caches.open(staticCacheName).then(function (cache) {
            return cache.match(event.request).then(function (response) {
                return response || fetch(event.request).then(function (response) {
                    cache.put(event.request, response.clone());
                    return response;
                });
            });
        })
    );
});