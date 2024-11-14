// init naming your cache
let staticCacheName = "risyandi-mws-static";

// adding file
let urlToCache = [
  "/index.html",
  "/style/style.css",
  "/script/initServiceWorker.js",
  "/images/favicon.ico",
  "/images/image-1.png",
  "/images/image-2.png",
  "/images/image-3.png",
  "/images/risyandi_logo.png",
  "/images/risyandi_profile.jpg",
  "/project-offline/restaurant.html?id=1",
  "/project-offline/restaurant.html?id=2",
  "/project-offline/restaurant.html?id=3",
  "/project-offline/restaurant.html?id=4",
  "/project-offline/restaurant.html?id=5",
  "/project-offline/restaurant.html?id=6",
  "/project-offline/restaurant.html?id=7",
  "/project-offline/restaurant.html?id=8",
  "/project-offline/restaurant.html?id=9",
  "/project-offline/restaurant.html?id=10",
  "/project-offline/images/1.jpg",
  "/project-offline/images/2.jpg",
  "/project-offline/images/3.jpg",
  "/project-offline/images/4.jpg",
  "/project-offline/images/5.jpg",
  "/project-offline/images/6.jpg",
  "/project-offline/images/7.jpg",
  "/project-offline/images/8.jpg",
  "/project-offline/images/9.jpg",
  "/project-offline/images/10.jpg",
];

//  Process listen install service worker
self.addEventListener("install", function (event) {
  console.log("run process installing");
  // event wait until process installing service worker
  event.waitUntil(
    caches.open(staticCacheName).then(function (cache) {
      // add file adding on cache
      return cache.addAll(urlToCache);
    })
  );
});

// Process listen activate service worker
self.addEventListener("activate", function (event) {
  console.log("run process activate");
  // event wait untill process activate service worker
  event.waitUntil(
    caches.keys().then(function (keyCache) {
      return Promise.all(
        keyCache
          .filter(function (cacheName) {
            return (
              cacheName.startsWith("risyandi-mws-") &&
              cacheName != staticCacheName
            );
          })
          .map(function (cacheName) {
            return caches.delete(cacheName);
          })
      );
    })
  );
});

//  Process Listen fetching service worker
self.addEventListener("fetch", function (event) {
  console.log("run process fetching");
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      }

      return fetch(event.request, { cache: "no-store" }).then(function (
        response
      ) {
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response;
        }

        var responseToCache = response.clone();

        caches.open(staticCacheName).then(function (cache) {
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    })
  );
});
