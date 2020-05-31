const CACHE_NAME = 'Version_0.1.0'
const urls = [
  '/icon.ico',
  '/index.html',
  '/icon.png',
  '/manifest.json'
]

self.addEventListener('install', async event => {
  const cache = await caches.open(CACHE_NAME)
  await cache.addAll(urls)
  await self.skipWaiting()
})

self.addEventListener('activate', async event => {
  const keys = await caches.keys()
  keys.forEach(key => {
    if (key !== CACHE_NAME) {
      caches.delete(key)
    }
  })
  await self.clients.claim()
})

self.addEventListener('fetch', async event => {
  const req = event.request
  const url = new URL(req.url)
  if (url.origin !== self.origin) {
    return
  }
  // 此处
  // if(req.url.include('/api')){
  event.respondWith(networkFirst(req))
  // }else{
  //   event.respondWith(cacheFirst(req))
  // }
})

async function cacheFirst (req) {
  const cache = await caches.open(CACHE_NAME)
  const cached = await cache.match(req)
  if (cached) {
    return cached
  } else {
    const fresh = await fetch(req)
    return fresh
  }
}

async function networkFirst (req) {
  const cache = await caches.open(CACHE_NAME)
  try {
    const fresh = await fetch(req)
    await cache.put(req, fresh.clone())
    return fresh
  } catch (e) {
    const cache = await caches.open(CACHE_NAME)
    const cached = await cache.match(req)
    return cached
  }
}
