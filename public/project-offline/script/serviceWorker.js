let staticCacheName = "risyandi-mws-static";
//  Process listen install service worker
self.addEventListener('install', function (event) {
    console.log("run process installing");
    // adding file 
    let urlToCache = [
        '/index.html',
        'index/images/cover.jpg',
        'index/images/favicon.ico',
        'index/css/style.css',
        'index/script/loop.js',
    ];
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
        caches.keys().then(function (cacheName) {   
            return Promise.all(
                cacheName.filter(function (cacheName) {
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
    event.responWidth(
        caches.match(event.request).then(function(response){
            console.log(response);
            
            return response || fetch(event.request).then(function (response) {
                return caches.open(staticCacheName).then(function (cache) {
                    cache.put(event.request, response.clone());
                    return response;
                });
                
            })
        })
    );
});