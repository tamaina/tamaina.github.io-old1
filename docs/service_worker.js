self.importScripts('/docs/assets/workbox-sw.prod.v2.1.1.js')

const workboxSW = new self.WorkboxSW()
workboxSW.precache([
  {
    "url": "404/index.html",
    "revision": "e4a4a1ecb76b2b0fb8ba504ed32f434f"
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
    "revision": "45d9946b7cdf2734d549bcc499117da3"
  },
  {
    "url": "assets/style.css",
    "revision": "c81e73372ed458a78ee5b9ed6fe5237b"
  },
  {
    "url": "assets/style.min.css",
    "revision": "c67dbbf7f0b7948ca11cec784209ec95"
  },
  {
    "url": "assets/workbox-sw.prod.v2.1.1.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "blog/about_me/index.html",
    "revision": "bca54f257326ba93ddb5f9ffa1b7b4c9"
  },
  {
    "url": "blog/bootstrap-v4-beta/index.html",
    "revision": "90f8e07183c244aba0110d32ec735600"
  },
  {
    "url": "blog/bunkasai/index.html",
    "revision": "aa0783537ca1dced59b00cf2f5257be3"
  },
  {
    "url": "blog/chirno_intro/index.html",
    "revision": "f20ce54ba328688f98440265d39ed24b"
  },
  {
    "url": "blog/getval_test/index.html",
    "revision": "b486f55e48d6dc376588fd24eac62cbf"
  },
  {
    "url": "blog/hachikou/index.html",
    "revision": "f38ba38ce2f1e2ed1d5c4d103201dd9a"
  },
  {
    "url": "blog/index.html",
    "revision": "ccaf5881b47633b367e59515bff3f4b2"
  },
  {
    "url": "blog/maqz001400/index.html",
    "revision": "d03c19e2bf39f8ad4537e2a3f9f6ba7b"
  },
  {
    "url": "blog/suiranfes2017/index.html",
    "revision": "1c117ccd35be8fe17387cad30cd82c86"
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
    "revision": "4d7d31a692369a6410f473c6752c6542"
  },
  {
    "url": "info.json",
    "revision": "80239ffb6d04de1524c023d327334cdc"
  },
  {
    "url": "manifest.json",
    "revision": "973a1394a9a210a7996dd7e5db262dc5"
  },
  {
    "url": "MDBuilder/configulation/index.html",
    "revision": "93cc155dc54ba174ee535d331255f1af"
  },
  {
    "url": "MDBuilder/howtowrite/index.html",
    "revision": "e38d639d2827622d2216c957ca2fe9c4"
  },
  {
    "url": "MDBuilder/index.html",
    "revision": "724f95fbb0bcc9321b015b8d8ea504af"
  },
  {
    "url": "MDBuilder/pages/index.html",
    "revision": "b807f1b7f5a132241099d0b297a4cae5"
  },
  {
    "url": "MDBuilder/theme/index.html",
    "revision": "fabfe6b30defe75e236134462ada28bc"
  }
])
