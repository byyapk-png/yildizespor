var CACHE = 'yildiz-v1';
var URLS = ['/yildizespor/', '/yildizespor/index.html'];

self.addEventListener('install', function(e) {
  e.waitUntil(caches.open(CACHE).then(function(c) { return c.addAll(URLS); }));
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(r) { return r || fetch(e.request); })
  );
});
