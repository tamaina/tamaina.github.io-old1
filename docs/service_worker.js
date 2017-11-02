self.importScripts('/docs/assets/workbox-sw.prod.v2.1.0.js')

const workboxSW = new self.WorkboxSW()
workboxSW.precache([
  {
    "url": "404.html",
    "revision": "36c2d9643410121cfe201ac91e0d1ea8"
  },
  {
    "url": "assets/main.js",
    "revision": "0c617978e7de55dbf78d7a56028e1dad"
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
    "revision": "8592b1f81e81587a82726ca6549d34e3"
  },
  {
    "url": "assets/style.css",
    "revision": "e0bd1f410d5b9e26739bf7f463008ce3"
  },
  {
    "url": "assets/style.min.css",
    "revision": "9bcbd90a064a6b64f480265ef593cb15"
  },
  {
    "url": "assets/workbox-sw.prod.v2.1.0.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "blog/about_me.html",
    "revision": "16085635133ca2bdc44e1bf0b947f228"
  },
  {
    "url": "blog/bootstrap-v4-beta.html",
    "revision": "c12510ac4c69e89a2a2e88740e0b964c"
  },
  {
    "url": "blog/bunkasai.html",
    "revision": "659c4b8532a3ffbb3913a6fa324c8079"
  },
  {
    "url": "blog/chirno_intro.html",
    "revision": "4a77a2fe5176d7de065feaaa4f69b938"
  },
  {
    "url": "blog/getval_test.html",
    "revision": "325696c4937e96347c411eeb11396cd1"
  },
  {
    "url": "blog/hachikou.html",
    "revision": "1dbd89138abdce2a5278d320d2c77067"
  },
  {
    "url": "blog/index.html",
    "revision": "979359174ca2e64d8a59a07f2836fb3b"
  },
  {
    "url": "blog/maqz001400.html",
    "revision": "1299d539f3f0c82a77d68fb6e85e9522"
  },
  {
    "url": "blog/suiranfes2017.html",
    "revision": "6810d7970572701b61ec2ae4904ce99b"
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
    "revision": "1b450304926cb8c5efe74d4de93bd8f1"
  },
  {
    "url": "manifest.json",
    "revision": "bbbfc29d79b4e4b4acb9e868998ba80e"
  },
  {
    "url": "MDBuilder/configulation.html",
    "revision": "d1855a2e9a5a0d184bc92cc75fcd600e"
  },
  {
    "url": "MDBuilder/howtowrite.html",
    "revision": "eae81d0e4351d3e15b6b489ccc7bb9ad"
  },
  {
    "url": "MDBuilder/index.html",
    "revision": "87e7c53617b04c137ffcf661f1387f86"
  },
  {
    "url": "MDBuilder/pages.html",
    "revision": "078f12845fcd0974cbc559168df29b87"
  },
  {
    "url": "MDBuilder/theme.html",
    "revision": "6e18b4d2f9751401f2c53fa82a699fb0"
  }
])
