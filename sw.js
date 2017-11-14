const VERSION = 'v10';

const onCache = cache => cache.addAll([
  './',
  './index.html',
  './index.css',
  './skeleton.css',
  './index.js',
  './fetch.js',
  './util.js',
  './data.js',
  './img/kirpan.jpg',
  './img/sword.png',
]);

this.addEventListener('install', e => e.waitUntil(
  caches
    .open(VERSION)
    .then(onCache)
));

this.addEventListener('activate', e => e.waitUntil(caches
  .keys()
  .then(cs => cs.filter(c => c !== VERSION))
  .then(cs => Promise.all(cs.map(c => caches.delete(c))))
  .then(() => self.clients.claim())
));

this.addEventListener('fetch', e =>	e.respondWith(
  caches
    .match(e.request)
    .then(res => res || fetch(e.request))
));
