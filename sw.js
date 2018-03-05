importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "qathom-site",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.90c3ecdca7c90cf6a5d4.js",
    "revision": "bd71117b663c31df29a784388d684443"
  },
  {
    "url": "/_nuxt/layouts/default.09e36073b3ba20c6320f.js",
    "revision": "0b1cd1f6ad9652ba10b3d04232fe22a4"
  },
  {
    "url": "/_nuxt/manifest.1e44e84fba8c26fb0786.js",
    "revision": "29fb2f8fdcf2523293da478db22d4523"
  },
  {
    "url": "/_nuxt/pages/_lang/index.6ef7f5ff004a9620e6da.js",
    "revision": "b4a360313cc404f82d854d9ff0b1eba9"
  },
  {
    "url": "/_nuxt/pages/index.e7d02671ab5d942238f6.js",
    "revision": "691041e9a881fafb9b9d2c67c80af616"
  },
  {
    "url": "/_nuxt/vendor.a96d9279867e5b20c2b4.js",
    "revision": "277f286617576535a20360d513855418"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

