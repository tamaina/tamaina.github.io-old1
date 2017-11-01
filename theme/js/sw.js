
self.addEventListener('fetch', function(event) {
    event.waitUntil(
      caches.keys().then(function(keyList) {
        return Promise.all(keyList.map(function(key) {
            return caches.delete(key)
        }))
      })
    )
})

self.importScripts('/assets/{fileName}')

const workboxSW = new self.WorkboxSW()
workboxSW.precache([])
