let CACHE_NAME = "animated-accordion";
let urlsToCache = [
    "/",
    "./index.html",
    "./style.css",
    "./script.js",
    "./images/Icon-192.png",
    "./images/Icon-512.png",
];

self.addEventListener("install", e => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(res => {
            return res || fetch(e.request)
        })
    )
})