self.importScripts('/docs/workbox-sw.prod.v2.1.2.js')

const workboxSW = new self.WorkboxSW()
workboxSW.precache([
  {
    "url": "404/index.html",
    "revision": "f6134c8060bee064e8c49f6f3c0c67ab"
  },
  {
    "url": "assets/main.min.js",
    "revision": "d086e55d22cd4da3933f1eca386b7773"
  },
  {
    "url": "assets/style.min.css",
    "revision": "6815be7049ab1d122c16936cdc7f0cde"
  },
  {
    "url": "blog/about_me/amp.html",
    "revision": "eec752c5523cadde6c8b15fa83e5dfbe"
  },
  {
    "url": "blog/about_me/index.html",
    "revision": "eec752c5523cadde6c8b15fa83e5dfbe"
  },
  {
    "url": "blog/bootstrap-v4-beta/amp.html",
    "revision": "826f83f0bec30968ab6e8473f959a68e"
  },
  {
    "url": "blog/bootstrap-v4-beta/index.html",
    "revision": "826f83f0bec30968ab6e8473f959a68e"
  },
  {
    "url": "blog/bunkasai/amp.html",
    "revision": "0364e0064a1a1ba3326e6ec0ec3d62e1"
  },
  {
    "url": "blog/bunkasai/index.html",
    "revision": "0364e0064a1a1ba3326e6ec0ec3d62e1"
  },
  {
    "url": "blog/category/aqz/index.html",
    "revision": "19b927f91fd78bb1dbfd18717acbc0e7"
  },
  {
    "url": "blog/category/index.html",
    "revision": "978301f3ab71b12d223bb2e32aef4584"
  },
  {
    "url": "blog/category/web/index.html",
    "revision": "a40e89c461024015da3e6cd578a952ff"
  },
  {
    "url": "blog/category/なにか/index.html",
    "revision": "004a08b38f4e625eb823d7c1f85edbf8"
  },
  {
    "url": "blog/category/趣味/index.html",
    "revision": "8a373fd10572b4b59b4a9e5fbfbc3d89"
  },
  {
    "url": "blog/chirno_intro/amp.html",
    "revision": "71b0351d4da890cfe5f1882b8b0ebecb"
  },
  {
    "url": "blog/chirno_intro/index.html",
    "revision": "71b0351d4da890cfe5f1882b8b0ebecb"
  },
  {
    "url": "blog/getval_test/amp.html",
    "revision": "eafa878276fc7793ebbfb3127aa3b62b"
  },
  {
    "url": "blog/getval_test/index.html",
    "revision": "eafa878276fc7793ebbfb3127aa3b62b"
  },
  {
    "url": "blog/hachikou/amp.html",
    "revision": "0364e0064a1a1ba3326e6ec0ec3d62e1"
  },
  {
    "url": "blog/hachikou/index.html",
    "revision": "0364e0064a1a1ba3326e6ec0ec3d62e1"
  },
  {
    "url": "blog/index.html",
    "revision": "dd5d3d97876ca6dee1fb3c53bcdef394"
  },
  {
    "url": "blog/maqz001400/amp.html",
    "revision": "6a689768c06fbda628f83dcfa2033fb1"
  },
  {
    "url": "blog/maqz001400/index.html",
    "revision": "6a689768c06fbda628f83dcfa2033fb1"
  },
  {
    "url": "blog/takasaki/index.html",
    "revision": "9d02b6a25c7acb38566d0117840dd129"
  },
  {
    "url": "index.html",
    "revision": "06178adee5fcbc062a9617761b491abe"
  },
  {
    "url": "info.json",
    "revision": "c9cd1568463c934353c5e1e347156407"
  },
  {
    "url": "maqz/configulation/index.html",
    "revision": "7dfded653115c1151da0bc3704b2a212"
  },
  {
    "url": "maqz/howtowrite/index.html",
    "revision": "fcfd0697f4b935235f9e55041ab3cdc9"
  },
  {
    "url": "maqz/index.html",
    "revision": "afe22fada9ae1c7b329409e75ddc0ed1"
  },
  {
    "url": "maqz/pages/index.html",
    "revision": "3b59984216cc623028acaa8da23fe6d0"
  },
  {
    "url": "maqz/theme/index.html",
    "revision": "0f9e6fd98f343d9ec360b0b2c174830f"
  },
  {
    "url": "workbox-sw.prod.v2.1.2.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  }
])
