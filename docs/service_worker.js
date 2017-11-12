self.importScripts('/docs/assets/workbox-sw.prod.v2.1.1.js')

const workboxSW = new self.WorkboxSW()
workboxSW.precache([
  {
    "url": "404/index.html",
    "revision": "8e5e691a15df4dd5e51f2c14417501fc"
  },
  {
    "url": "assets/main.js",
    "revision": "06604456a2c8ca57997ade8382188c21"
  },
  {
    "url": "assets/main.min.js",
    "revision": "bc94e4e24a25ff0a169a9b7af5deeb60"
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
    "revision": "45d9946b7cdf2734d549bcc499117da3"
  },
  {
    "url": "assets/style.css",
    "revision": "c1293e0c8357ee7f5c0611b693c0af93"
  },
  {
    "url": "assets/style.min.css",
    "revision": "2a998027894a280e35d1e73db6b28b0c"
  },
  {
    "url": "assets/workbox-sw.prod.v2.1.1.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "blog/about_me/index.html",
    "revision": "64015c84fa9246c0d840b1de90fcd14b"
  },
  {
    "url": "blog/bootstrap-v4-beta/index.html",
    "revision": "d64cdf47e782b08a4fabe106d1e7f89a"
  },
  {
    "url": "blog/bunkasai/index.html",
    "revision": "43f7177434a5e07e2f40f459d84176b5"
  },
  {
    "url": "blog/chirno_intro/index.html",
    "revision": "85fb9c462a814a3c07ce54968ca34ce2"
  },
  {
    "url": "blog/getval_test/index.html",
    "revision": "9a899020cb08ec503649a8379fb183f0"
  },
  {
    "url": "blog/hachikou/index.html",
    "revision": "83b7c396eefbf8e84c480a2cbc23272b"
  },
  {
    "url": "blog/index.html",
    "revision": "435fc04aa923b6958322a4a11b12f7ab"
  },
  {
    "url": "blog/maqz001400/index.html",
    "revision": "dce03cc07dc56051b6c6b554b638f9ba"
  },
  {
    "url": "blog/suiranfes2017/index.html",
    "revision": "cab7d731a3cc4ae52df9ed1921c0daad"
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
    "revision": "45bb97f0428266504440cee7957bdfea"
  },
  {
    "url": "info.json",
    "revision": "dddd9d97e25af34c7475f5b6235d4ad6"
  },
  {
    "url": "manifest.json",
    "revision": "973a1394a9a210a7996dd7e5db262dc5"
  },
  {
    "url": "MDBuilder/configulation/index.html",
    "revision": "2fbf44f2fca8426426cbb5810b3ee9c0"
  },
  {
    "url": "MDBuilder/howtowrite/index.html",
    "revision": "a256fb676d623b3f9303802e7c4dfdd0"
  },
  {
    "url": "MDBuilder/index.html",
    "revision": "7c29a5e813e23510edb1b72f7c1e6353"
  },
  {
    "url": "MDBuilder/pages/index.html",
    "revision": "4d1463246122609413794960c8f85490"
  },
  {
    "url": "MDBuilder/theme/index.html",
    "revision": "2741c73034b7f02bf641ecae80b0a10d"
  }
])
