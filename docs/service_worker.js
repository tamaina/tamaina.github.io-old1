self.importScripts('/docs/assets/workbox-sw.prod.v2.1.0.js')

const workboxSW = new self.WorkboxSW()
workboxSW.precache([
  {
    "url": "404/index.html",
    "revision": "e17a1ba69ad383ef713b65c934b42128"
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
    "revision": "d532fbfd6e91870cfc49e98d1d592577"
  },
  {
    "url": "assets/style.css",
    "revision": "4380f98e0a8f06d7ebfc3d5d15538c9a"
  },
  {
    "url": "assets/style.min.css",
    "revision": "1c41f799edb27b28fb446c9aee081f6b"
  },
  {
    "url": "assets/workbox-sw.prod.v2.1.0.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "blog/about_me/index.html",
    "revision": "fc8385a3a15cc284195175c62f6596f8"
  },
  {
    "url": "blog/bootstrap-v4-beta/index.html",
    "revision": "d2846dc20aba9f078142afb6218d3ff6"
  },
  {
    "url": "blog/bunkasai/index.html",
    "revision": "2e6531cbd48cfea6fe65c249e0eee454"
  },
  {
    "url": "blog/chirno_intro/index.html",
    "revision": "9104cfad8b1c2b2c06f7d528ffa75d71"
  },
  {
    "url": "blog/getval_test/index.html",
    "revision": "0ecfa1a3c2bece0a9468e39e1380dda0"
  },
  {
    "url": "blog/hachikou/index.html",
    "revision": "0f3a5321baf1fd42a297b72660e14272"
  },
  {
    "url": "blog/index.html",
    "revision": "30509b3528387bbc5f1ad9513dcbc9cd"
  },
  {
    "url": "blog/maqz001400/index.html",
    "revision": "de12ecd5b2e958697f23560da3ff5f4b"
  },
  {
    "url": "blog/suiranfes2017/index.html",
    "revision": "a2fe80c93b398c52b6c1ae68214dec79"
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
    "revision": "73245fdb8e91518c0111e88d5ca52c6c"
  },
  {
    "url": "info.json",
    "revision": "091297f6cb0dedd279e7474de486a7ab"
  },
  {
    "url": "manifest.json",
    "revision": "8e4afcecf29d2daae9a4d8955d67fa01"
  },
  {
    "url": "MDBuilder/configulation/index.html",
    "revision": "2668ef1cf4c38b0f49af41ff86ef497f"
  },
  {
    "url": "MDBuilder/howtowrite/index.html",
    "revision": "37da997de1f6f2eaa9b1b2dcf2d79f11"
  },
  {
    "url": "MDBuilder/index.html",
    "revision": "ad84a2c39f076c198ed78a48a18399e0"
  },
  {
    "url": "MDBuilder/pages/index.html",
    "revision": "80c33ebbdbc0d120543e1aefa4fd6f86"
  },
  {
    "url": "MDBuilder/theme/index.html",
    "revision": "57c6ef13fd431b629f8361e06d2f3920"
  }
])
