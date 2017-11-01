
self.addEventListener('fetch', function(event) {
    event.waitUntil(
      caches.keys().then(function(keyList) {
        return Promise.all(keyList.map(function(key) {
            return caches.delete(key)
        }))
      })
    )
})

self.importScripts('/assets/workbox-sw.prod.v2.1.0.js')

const workboxSW = new self.WorkboxSW()
workboxSW.precache([
  {
    "url": "404.html",
    "revision": "344fc1f5190a733f880afa796d5d3907"
  },
  {
    "url": "assets/main.js",
    "revision": "ca94c2329e96cc55d9d14b2919e36d95"
  },
  {
    "url": "assets/main.min.js",
    "revision": "a1b6263ed753cd90d8da01172324dd63"
  },
  {
    "url": "assets/pjax-api.js",
    "revision": "64b8d4f19f565a0272b8d35d9ebcfc64"
  },
  {
    "url": "assets/pjax-api.min.js",
    "revision": "ab77842762b99fd55368279858614470"
  },
  {
    "url": "assets/pjax-init.js",
    "revision": "1c2f6bae4324e60aea038e1ac2e273c5"
  },
  {
    "url": "assets/style.css",
    "revision": "9017cf03ed5af8a3c907c7c01dbe7689"
  },
  {
    "url": "assets/style.min.css",
    "revision": "912275adc8c7d8e12c7a3e6b77e34a16"
  },
  {
    "url": "assets/workbox-sw.prod.v2.1.0.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "blog/about_me.html",
    "revision": "b8b9618b3e050de77f514cd56a0ef56f"
  },
  {
    "url": "blog/bootstrap-v4-beta.html",
    "revision": "808cb9d1723bb83d35915963757195cc"
  },
  {
    "url": "blog/bunkasai.html",
    "revision": "eb88bf24c893aa5e872229d51b3298f8"
  },
  {
    "url": "blog/chirno_intro.html",
    "revision": "d8fad18ff350be66ac4ea0b1f05cbdf5"
  },
  {
    "url": "blog/getval_test.html",
    "revision": "db78986699c6160e42ab7b25ab16899b"
  },
  {
    "url": "blog/hachikou.html",
    "revision": "bca60655b140d4563eedd4152c3d784b"
  },
  {
    "url": "blog/index.html",
    "revision": "1f857496710ca68e3dc8f21f0db7b268"
  },
  {
    "url": "blog/suiranfes2017.html",
    "revision": "91a0fdd5d705879356ac5df8a584f9f0"
  },
  {
    "url": "files/blog/chirno/scnsht_001.png",
    "revision": "d3d3edc83c1715aa521442858b28f14f"
  },
  {
    "url": "files/images/icons/favicon-114x114.png",
    "revision": "48886e3e80bd7bc04317746ef2c1784b"
  },
  {
    "url": "files/images/icons/favicon-120x120.png",
    "revision": "26464843b4d11a101f3235885cb2480b"
  },
  {
    "url": "files/images/icons/favicon-144x144.png",
    "revision": "5c93c44802d5167e7f6ecf22b3aa2d50"
  },
  {
    "url": "files/images/icons/favicon-152x152.png",
    "revision": "4186931bb3cd918a2d899649110da2e0"
  },
  {
    "url": "files/images/icons/favicon-160x160.png",
    "revision": "7b81d873eabdd02ccc5ca53b385bc481"
  },
  {
    "url": "files/images/icons/favicon-16x16.png",
    "revision": "307d271bdb043db13ded6cfd748ad54e"
  },
  {
    "url": "files/images/icons/favicon-180x180.png",
    "revision": "b196facf589645bab2c072584a4d2f0d"
  },
  {
    "url": "files/images/icons/favicon-192x192.png",
    "revision": "5e69d704dc8fb8b5709a688e3ff7709a"
  },
  {
    "url": "files/images/icons/favicon-196x196.png",
    "revision": "bea16697b253342b460d36113e9d9783"
  },
  {
    "url": "files/images/icons/favicon-32x32.png",
    "revision": "aac4482c3fc8a01c796ed1555cbe4ec6"
  },
  {
    "url": "files/images/icons/favicon-36x36.png",
    "revision": "f38caf79988f68516b05e4372009a1e8"
  },
  {
    "url": "files/images/icons/favicon-48x48.png",
    "revision": "cb1dfbf5b62c0b63af3655a11280a2b7"
  },
  {
    "url": "files/images/icons/favicon-57x57.png",
    "revision": "98bdb92317a39a8571b7f0d8ad39db05"
  },
  {
    "url": "files/images/icons/favicon-600x600.png",
    "revision": "d7d83d1c31adcf8259168b261b9a86af"
  },
  {
    "url": "files/images/icons/favicon-60x60.png",
    "revision": "d9ba45754911712bc6ff040ab2cbd38a"
  },
  {
    "url": "files/images/icons/favicon-72x72.png",
    "revision": "974e7b89b6cb0353e7fdadb124eb3f2f"
  },
  {
    "url": "files/images/icons/favicon-76x76.png",
    "revision": "903ea958bb7e662544be7e6958099440"
  },
  {
    "url": "files/images/icons/favicon-96x96.png",
    "revision": "0d6bde099f876de468a0a146c2e1e0c9"
  },
  {
    "url": "files/images/icons/manifest.json",
    "revision": "1aa32197cd997823573ea9f3bac73d26"
  },
  {
    "url": "files/images/icons/mstile-144x144.png",
    "revision": "5c93c44802d5167e7f6ecf22b3aa2d50"
  },
  {
    "url": "files/images/icons/mstile-150x150.png",
    "revision": "344960beceae94bc4afb3c4d5893686c"
  },
  {
    "url": "files/images/icons/mstile-310x150.png",
    "revision": "1241b704d1c4c90e7ce394e3f1683a7b"
  },
  {
    "url": "files/images/icons/mstile-310x310.png",
    "revision": "9581ae2894fa9b0c2ae677832d0d7b62"
  },
  {
    "url": "files/images/icons/mstile-70x70.png",
    "revision": "f7f2ae12d1b92ad986f2a088d9af67bc"
  },
  {
    "url": "files/index_old.html",
    "revision": "54b5d8e3112f99ba13706735ee5a8e1e"
  },
  {
    "url": "index.html",
    "revision": "a6d0b0ef213f126b89c9085923a1e02b"
  },
  {
    "url": "info.json",
    "revision": "6168f6f3a5b61858fe4245fb4b9174d6"
  },
  {
    "url": "manifest.json",
    "revision": "a0f350a1972395d8cbab2d3a5c542c78"
  },
  {
    "url": "MDBuilder/configulation.html",
    "revision": "143f6019a63d9313556cfafe64e65473"
  },
  {
    "url": "MDBuilder/howtowrite.html",
    "revision": "824903ce6f3529487dd3fc2bb7cbb7e8"
  },
  {
    "url": "MDBuilder/index.html",
    "revision": "917dd9efb4f22f54421ddffd582975c4"
  },
  {
    "url": "MDBuilder/pages.html",
    "revision": "dc336b16624851e492c7fc0250297fa6"
  },
  {
    "url": "MDBuilder/theme.html",
    "revision": "90f132549ff0a305b64a3d95b3ea3d9e"
  }
])
