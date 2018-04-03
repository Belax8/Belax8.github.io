var CACHE_NAME = 'belax-github-cache-v1';

var urlsToCache = [
  // IMAGES
  'https://avatars1.githubusercontent.com/u/18056953?v=3&s=460',
  '/images/belax8-v2-wobg.png',
  '/images/belax8-v2.png',
  '/images/bountysource-v2.png',
  '/images/chase.jpg',
  '/images/codepen-s.png',
  '/images/codepen.png',
  '/images/codewars.png',
  '/images/github-white.png',
  '/images/linkedin.png',
  '/images/mpr-logo-v2.png',
  '/images/vma-logo-h.png',
  '/images/white-github.png',
  // CSS
  'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css',
  'main.css',
  // JS
  'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js',
  'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js',
  'main.js',
  // HTML
  'index.html'
];


self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(urlsToCache);
    })
  );
});


self.addEventListener('activate', function(event) {
  // clean up all the old caches
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName != CACHE_NAME;
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});


self.addEventListener('fetch', function(event) {
  // try to find the data in cache, else make request
  event.respondWith(
    caches.match(event.request).then(function(response) {
      // if we find it in cache
      if (response) return response;
      // if not, GET data and cache it
      const request = event.request.clone();
      return fetch(request).then(function(response) {
        // check for errors
        if (!response || response.status !== 200) {
          return response;
        }
        
        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then(function(cache) {
          cache.put(event.request, responseToCache);
        });
        return response;
      })
    })
  );
});
