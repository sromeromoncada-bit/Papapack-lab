const C='papapack-v1';
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(['./','./index.html','https://unpkg.com/html5-qrcode','https://cdn.jsdelivr.net/npm/chart.js']).catch(()=>{})))});
self.addEventListener('activate',e=>e.waitUntil(clients.claim()));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;
e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request).then(res=>{const k=res.clone();caches.open(C).then(c=>c.put(e.request,k));return res}).catch(()=>caches.match('./index.html'))))});
