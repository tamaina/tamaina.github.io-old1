self.importScripts('/docs/assets/workbox-sw.prod.v2.1.1.js')

const workboxSW = new self.WorkboxSW()
workboxSW.precache([
  {
    "url": "404/index.html",
    "revision": "0c9243294b29f0f4de5030a6974f8482"
  },
  {
    "url": "assets/main.js",
    "revision": "319d75ddb44de26ad5542a3319baae7a"
  },
  {
    "url": "assets/main.min.js",
    "revision": "0e063327be2a167c7db0a89791c2bd1a"
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
    "revision": "4c8cec2c9e5c7dba74a306ae43a57fc1"
  },
  {
    "url": "assets/style.min.css",
    "revision": "74b9c0230bd478c0f01677c2d3884482"
  },
  {
    "url": "assets/workbox-sw.prod.v2.1.1.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "blog/about_me/index.html",
    "revision": "6435a3810d90a84c11ff69efb1841f56"
  },
  {
    "url": "blog/bootstrap-v4-beta/index.html",
    "revision": "2d72e64baca72a8b5c81f63cbdd3ad41"
  },
  {
    "url": "blog/bunkasai/index.html",
    "revision": "75d7ddd97ad91f0ad915146daca28995"
  },
  {
    "url": "blog/chirno_intro/index.html",
    "revision": "137ef3eacadd2f12d45048ab3b0557fa"
  },
  {
    "url": "blog/getval_test/index.html",
    "revision": "51459a712dec819db68aa08ae62813e8"
  },
  {
    "url": "blog/hachikou/index.html",
    "revision": "ac4351022a04437bc75ca7595b3db09a"
  },
  {
    "url": "blog/index.html",
    "revision": "b325d6900b013c87aace02a102b98bd3"
  },
  {
    "url": "blog/maqz001400/index.html",
    "revision": "fd462177dd0fa9f658fc2d605dacf8c0"
  },
  {
    "url": "blog/suiranfes2017/index.html",
    "revision": "70c05124104b7ff96e57a0ec1dc9a341"
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
    "revision": "c0becd2b9ff40a22ce68a15dd74a121c"
  },
  {
    "url": "info.json",
    "revision": "efd8b8fdec11e1b267a811cffed27890"
  },
  {
    "url": "manifest.json",
    "revision": "973a1394a9a210a7996dd7e5db262dc5"
  },
  {
    "url": "MDBuilder/configulation/index.html",
    "revision": "28b1982de76b2af90b204ec7a8a1abdf"
  },
  {
    "url": "MDBuilder/howtowrite/index.html",
    "revision": "a2e8eeb16b4b819bc31352d0fe4c511b"
  },
  {
    "url": "MDBuilder/index.html",
    "revision": "3c4bef3ba200ccfe2492de7390f53941"
  },
  {
    "url": "MDBuilder/pages/index.html",
    "revision": "8324bb691034a642bc10229822382450"
  },
  {
    "url": "MDBuilder/theme/index.html",
    "revision": "2af6a4d16f212b990c776a613d500a3e"
  }
])
