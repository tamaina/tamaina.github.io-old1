self.importScripts('/docs/assets/workbox-sw.prod.v2.1.1.js')

const workboxSW = new self.WorkboxSW()
workboxSW.precache([
  {
    "url": "404/index.html",
    "revision": "f00078bfaf05f5a23b8f4cd0135430da"
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
    "revision": "a9de4178ff698acf91f8e3a03404371d"
  },
  {
    "url": "blog/bootstrap-v4-beta/index.html",
    "revision": "993105dcef14b3eb580d738304ef0fdf"
  },
  {
    "url": "blog/bunkasai/index.html",
    "revision": "47079b9aba986e39a819d9f83167918c"
  },
  {
    "url": "blog/chirno_intro/index.html",
    "revision": "23fa8747cde6b25b6ed69c247e1ac00b"
  },
  {
    "url": "blog/getval_test/index.html",
    "revision": "767660ac4a0380ba9c8f13822504378b"
  },
  {
    "url": "blog/hachikou/index.html",
    "revision": "0d5a25c67722ff5bc88f69716cdcade0"
  },
  {
    "url": "blog/index.html",
    "revision": "ad32590f69244e3e98b7aa091b545917"
  },
  {
    "url": "blog/maqz001400/index.html",
    "revision": "e605eb7f2bfb09634f5cc01bfa625af2"
  },
  {
    "url": "blog/suiranfes2017/index.html",
    "revision": "d7a42bb4e59a13ddb08921363f8c4277"
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
    "revision": "7cdcd7666bb80f6088701e526bf4c1ed"
  },
  {
    "url": "info.json",
    "revision": "15b1b3c5ddc23a8593f21b7064669054"
  },
  {
    "url": "manifest.json",
    "revision": "973a1394a9a210a7996dd7e5db262dc5"
  },
  {
    "url": "MDBuilder/configulation/index.html",
    "revision": "99a07988ac2e2720fdc1c55d1aa27ed9"
  },
  {
    "url": "MDBuilder/howtowrite/index.html",
    "revision": "9ae5461c675ca755efb4acb0b508698a"
  },
  {
    "url": "MDBuilder/index.html",
    "revision": "96216d15b04ac5bb397afce39e48bb47"
  },
  {
    "url": "MDBuilder/pages/index.html",
    "revision": "4208c6abb3e837cc58bece3f5f4a214f"
  },
  {
    "url": "MDBuilder/theme/index.html",
    "revision": "4d60b410d6b374a027e93d56cf988112"
  }
])
