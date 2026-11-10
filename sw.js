// Đại Thiên Tông — Nghe Truyện: service worker cho cài app + nghe offline phần đã tải
var CACHE = 'dtt-nghe-truyen-v1';
var SHELL = ['./', 'index.html', 'manifest.json', 'icon-192.png', 'icon-512.png', 'icon.svg'];

self.addEventListener('install', function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){ return c.addAll(SHELL); }).then(function(){ return self.skipWaiting(); }));
});
self.addEventListener('activate', function(e){
  e.waitUntil(caches.keys().then(function(keys){
    return Promise.all(keys.map(function(k){ return k === CACHE ? null : caches.delete(k); }));
  }).then(function(){ return self.clients.claim(); }));
});
self.addEventListener('fetch', function(e){
  var url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;
  var isData = /books\.json$/.test(url.pathname) || /\.txt$/.test(url.pathname) || /\.mp3$/.test(url.pathname);
  if (isData){
    // Dữ liệu truyện/nhạc: ưu tiên mạng (luôn mới), rớt mạng thì dùng bản đã lưu
    e.respondWith(fetch(e.request).then(function(r){
      var copy = r.clone();
      caches.open(CACHE).then(function(c){ c.put(e.request, copy); });
      return r;
    }).catch(function(){ return caches.match(e.request); }));
  } else {
    // Vỏ app: ưu tiên bản đã lưu cho mở tức thì, cập nhật ngầm
    e.respondWith(caches.match(e.request).then(function(hit){
      var net = fetch(e.request).then(function(r){
        var copy = r.clone();
        caches.open(CACHE).then(function(c){ c.put(e.request, copy); });
        return r;
      }).catch(function(){ return hit; });
      return hit || net;
    }));
  }
});
