self.importScripts('/docs/assets/workbox-sw.prod.v2.1.0.js')

const workboxSW = new self.WorkboxSW()
workboxSW.precache([
  {
    "url": "404.html",
    "revision": "f3d4e851a280c75b394db7808d353b8a"
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
    "revision": "43b1af66bc35e2b27fe915bb5eb89c6e"
  },
  {
    "url": "blog/bootstrap-v4-beta.html",
    "revision": "00ac3c59ebac743e803bf5231300b027"
  },
  {
    "url": "blog/bunkasai.html",
    "revision": "8f1cb793f6ebb6d0f670c4c669917ef3"
  },
  {
    "url": "blog/chirno_intro.html",
    "revision": "54e050686de04c445adcfa95cead6df2"
  },
  {
    "url": "blog/getval_test.html",
    "revision": "20af17e74a3865b9075a0b770c6206d4"
  },
  {
    "url": "blog/hachikou.html",
    "revision": "55b4ad10d61be12f541df9778975f034"
  },
  {
    "url": "blog/index.html",
    "revision": "31c422911c9e970f709ae7babe513041"
  },
  {
    "url": "blog/maqz001400.html",
    "revision": "e8f0c0c4a992723020815dce905cba03"
  },
  {
    "url": "blog/suiranfes2017.html",
    "revision": "4660ce829ebfa8d023f28b1eedb15093"
  },
  {
    "url": "files/blog/chirno/scnsht_001.png",
    "revision": "c41b9d2de7c2601c0d9f65c170e54ca2"
  },
  {
    "url": "files/images/icons/favicon-114x114.png",
    "revision": "2da1aa02208aa84efb2f463f53f05374"
  },
  {
    "url": "files/images/icons/favicon-120x120.png",
    "revision": "eae344aa4a5232c440cc3c9ef1725657"
  },
  {
    "url": "files/images/icons/favicon-144x144.png",
    "revision": "0544e3e7e0d8cb30e3df7bc990d2482c"
  },
  {
    "url": "files/images/icons/favicon-152x152.png",
    "revision": "130045d6240266643d7b1c459c11a9ea"
  },
  {
    "url": "files/images/icons/favicon-160x160.png",
    "revision": "d07f170971a08f614bf3dcb74f007834"
  },
  {
    "url": "files/images/icons/favicon-16x16.png",
    "revision": "e86ff4950a80c004210ebffded337366"
  },
  {
    "url": "files/images/icons/favicon-180x180.png",
    "revision": "f413f9af305b0259ae4b4f1334559ab2"
  },
  {
    "url": "files/images/icons/favicon-192x192.png",
    "revision": "b059f61906827d9d3e4adf9f6e6f9559"
  },
  {
    "url": "files/images/icons/favicon-196x196.png",
    "revision": "8a18b13354f6a977b00db14dc37f5f56"
  },
  {
    "url": "files/images/icons/favicon-32x32.png",
    "revision": "c46f98703e06a363acb8555f917a581b"
  },
  {
    "url": "files/images/icons/favicon-36x36.png",
    "revision": "db00958713a5b755fd4541ee9c60439a"
  },
  {
    "url": "files/images/icons/favicon-48x48.png",
    "revision": "69caa05367fe7197c0a58f0a17719504"
  },
  {
    "url": "files/images/icons/favicon-57x57.png",
    "revision": "a27d2eda64840e9ec681346c77dfa483"
  },
  {
    "url": "files/images/icons/favicon-600x600.png",
    "revision": "1e836f72df0ac99e6036dd6ccc54015a"
  },
  {
    "url": "files/images/icons/favicon-60x60.png",
    "revision": "da66caee37838c3763e52a36ce9e6f94"
  },
  {
    "url": "files/images/icons/favicon-72x72.png",
    "revision": "a3b4488f479c2830b29f5d1d39a591d3"
  },
  {
    "url": "files/images/icons/favicon-76x76.png",
    "revision": "8d654039b5d6aa88153fda80439225a7"
  },
  {
    "url": "files/images/icons/favicon-96x96.png",
    "revision": "ba2d21e480e1c4bbb2cd33abdaab8b09"
  },
  {
    "url": "files/images/icons/manifest.json",
    "revision": "1aa32197cd997823573ea9f3bac73d26"
  },
  {
    "url": "files/images/icons/mstile-144x144.png",
    "revision": "0544e3e7e0d8cb30e3df7bc990d2482c"
  },
  {
    "url": "files/images/icons/mstile-150x150.png",
    "revision": "71d949d563dacd95538c2f1ec8785084"
  },
  {
    "url": "files/images/icons/mstile-310x150.png",
    "revision": "a6b01b9fad7fb78e0750c9bdec9beb3e"
  },
  {
    "url": "files/images/icons/mstile-310x310.png",
    "revision": "efd1506ce64a67379da4cdff9b247d71"
  },
  {
    "url": "files/images/icons/mstile-70x70.png",
    "revision": "c8fbfa1151c81d999f5f089d03348219"
  },
  {
    "url": "files/index_old.html",
    "revision": "54b5d8e3112f99ba13706735ee5a8e1e"
  },
  {
    "url": "index.html",
    "revision": "b5746e95a00e80f4b319582b99d028da"
  },
  {
    "url": "info.json",
    "revision": "561e582924fe7bba7384b40754eb2762"
  },
  {
    "url": "manifest.json",
    "revision": "bbbfc29d79b4e4b4acb9e868998ba80e"
  },
  {
    "url": "MDBuilder/configulation.html",
    "revision": "0e182ba549c420672883e39dbbd8f8bc"
  },
  {
    "url": "MDBuilder/howtowrite.html",
    "revision": "3c1eab0fa76e83139a281dbd65279ab8"
  },
  {
    "url": "MDBuilder/index.html",
    "revision": "a4449f5746978b8fe6822c256fbad209"
  },
  {
    "url": "MDBuilder/pages.html",
    "revision": "755885f099da7dbf0a9b93b894deeaa7"
  },
  {
    "url": "MDBuilder/theme.html",
    "revision": "7e815f94cafb83c0a75e8a5c22365f8d"
  }
])
