let staticCacheName = "risyandi-mws-static";
// adding file 
let urlToCache = [
"/",
"/index/",
"/index/css/style.css",
"/index/images/cover.jpg",
"/index/images/favicon.ico",
"index/script/loop.js"
];

//  Process listen install service worker
self.addEventListener('install', function(event) {
    console.log("run process installing");
    // event wait until process installing service worker
    event.waitUntil(
        caches.open(staticCacheName).then(function(cache) {
            console.log('[Service Worker] caching app shell');
            return cache.addAll(urlToCache);
        })
    );
});

// Process listen activate service worker
self.addEventListener("activate", function (event) {
    console.log("run process activate");
    // event wait untill process activate service worker
    event.waitUntil(
        caches.keys().then(function (keyList) {
            return Promise.all(keyList.map(function (key) {
                if (key !== staticCacheName) {
                    console.log('[service worker] Removing old cache', key);
                    return caches.delete(key);
                }
            }));
        })
    );
    return self.clients.claim();
});

//  Process Listen fetching service worker
self.addEventListener('fetch', function (event) {
    console.log("run process fetching");

    event.responWidth(
        caches.match(event.request).then(function (response) {
            console.log(response);
            return response || fetch(event.request)
        })
    );
});