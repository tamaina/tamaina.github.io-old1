var version = '0.8.1';
var cachepages = [
    `info.json`,
    "./",
    "assets/main.min.js",
    "assets/style.min.css",
    "assets/fonts/GenShinGothic-Light.woff2",
    "assets/fonts/GenShinGothic-Medium.woff2",
    "assets/fonts/GenShinGothic-Heavy.woff2",
    "files/fonts/mgenplus-p-light.woff2",
    "files/fonts/mgenplus-p-medium.woff2",
    "files/fonts/mgenplus-p-heavy.woff2",
    "files/fonts/mgenplus-c-light.woff2",
    "files/fonts/mgenplus-c-medium.woff2",
    "files/fonts/mgenplus-c-heavy.woff2"
];
this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(version).then(function(cache) {
      return cache.addAll(cachepages);
    })
  );
});
this.addEventListener('fetch', function(event) {
  var cacheWhitelist = [version];

  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (cacheWhitelist.indexOf(key) === -1) {
          return caches.delete(key)
        }
      }))
    })
  )
  event.respondWith(
    caches.match(event.request)
      .then(
        function (response) {
          if (response) {
            this.registration.update();
            return response;
          }
          
          let fetchRequest = event.request.clone();

          return fetch(fetchRequest)
            .then((response) => {
              if (!response || response.status !== 200 || response.type !== 'basic') {
                return response;
              }
              let responseToCache = response.clone();

              caches.open(version)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          });
      }
    )
  );
});

this.addEventListener('install', function(event) {
  event.waitUntil(self.skipWaiting());
});
this.addEventListener('activate', function(event) {
  event.waitUntil(self.clients.claim());
});

// MDNより借用