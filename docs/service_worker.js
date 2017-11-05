self.importScripts('/docs/assets/workbox-sw.prod.v2.1.0.js')

const workboxSW = new self.WorkboxSW()
workboxSW.precache([
  {
    "url": "404/index.html",
    "revision": "de209ed686f95a85a71c53a71e378afa"
  },
  {
    "url": "assets/main.js",
    "revision": "59c3904db4bd14923671b89ad6e9bc06"
  },
  {
    "url": "assets/main.min.js",
    "revision": "0849ba1cccd09a507014cfffb7455dd7"
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
    "revision": "8592b1f81e81587a82726ca6549d34e3"
  },
  {
    "url": "assets/style.css",
    "revision": "2d90e08aa18365ffa05c551e2ad6f1d8"
  },
  {
    "url": "assets/style.min.css",
    "revision": "29e112eb76fd3f8d2903e33da1501789"
  },
  {
    "url": "assets/workbox-sw.prod.v2.1.0.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "blog/about_me/index.html",
    "revision": "2c9408d7055a947085347552535315d0"
  },
  {
    "url": "blog/bootstrap-v4-beta/index.html",
    "revision": "f7d25e2ccb0005a225e8c44601d33a4b"
  },
  {
    "url": "blog/bunkasai/index.html",
    "revision": "852679c78d3b972aa6131de903e963af"
  },
  {
    "url": "blog/chirno_intro/index.html",
    "revision": "b3945820654adbec29ddbc828072e446"
  },
  {
    "url": "blog/getval_test/index.html",
    "revision": "c5f5069bd3ebcf1f83f63af8ee684655"
  },
  {
    "url": "blog/hachikou/index.html",
    "revision": "71bd6b54cf3ae9b5f48e3c25edd5d011"
  },
  {
    "url": "blog/index.html",
    "revision": "37271a19e8b1a5f834ef794098ccb4a2"
  },
  {
    "url": "blog/maqz001400/index.html",
    "revision": "20a2112785a4107086be8e83895e5798"
  },
  {
    "url": "blog/suiranfes2017/index.html",
    "revision": "6d2122e8864904e9a1a6931c1778d63e"
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
    "revision": "f9eb1d1a340ff510dfcd3e99fced669d"
  },
  {
    "url": "info.json",
    "revision": "d977c9ccba30f9021a00c6255c984f28"
  },
  {
    "url": "manifest.json",
    "revision": "bbbfc29d79b4e4b4acb9e868998ba80e"
  },
  {
    "url": "MDBuilder/configulation/index.html",
    "revision": "eef58645d5ee35d27b7a560ad571c721"
  },
  {
    "url": "MDBuilder/howtowrite/index.html",
    "revision": "483bc79a16788b0c01687e796d975d92"
  },
  {
    "url": "MDBuilder/index.html",
    "revision": "a324baf8e0e84cda1fa9b9b1934d980c"
  },
  {
    "url": "MDBuilder/pages/index.html",
    "revision": "4685d8e4fe2b211cac3f18c4886eb3ce"
  },
  {
    "url": "MDBuilder/theme/index.html",
    "revision": "faf0dd7b07617d0ed4f1ec975701282e"
  }
])
