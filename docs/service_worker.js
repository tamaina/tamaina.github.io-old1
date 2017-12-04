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
    "revision": "a40e89c461024015da3e6cd578a952ff"
  },
  {
    "url": "blog/category/index.html",
    "revision": "978301f3ab71b12d223bb2e32aef4584"
  },
  {
    "url": "blog/category/web/index.html",
    "revision": "3c9e108df2f143c89c8bfdd50bf153b7"
  },
  {
    "url": "blog/category/なにか/index.html",
    "revision": "9d02b6a25c7acb38566d0117840dd129"
  },
  {
    "url": "blog/category/趣味/index.html",
    "revision": "8c626e34830e50a6b26f2f1ab4aa26fb"
  },
  {
    "url": "blog/chirno_intro/amp.html",
    "revision": "286e27d0e8dc5895a029995698343c06"
  },
  {
    "url": "blog/chirno_intro/index.html",
    "revision": "286e27d0e8dc5895a029995698343c06"
  },
  {
    "url": "blog/getval_test/amp.html",
    "revision": "93f8fda8072c3ff8f25479fbbeec0a35"
  },
  {
    "url": "blog/getval_test/index.html",
    "revision": "93f8fda8072c3ff8f25479fbbeec0a35"
  },
  {
    "url": "blog/hachikou/amp.html",
    "revision": "6a689768c06fbda628f83dcfa2033fb1"
  },
  {
    "url": "blog/hachikou/index.html",
    "revision": "6a689768c06fbda628f83dcfa2033fb1"
  },
  {
    "url": "blog/index.html",
    "revision": "9778ae813e9c1c28f48ad6d068d45bda"
  },
  {
    "url": "blog/maqz001400/amp.html",
    "revision": "71b0351d4da890cfe5f1882b8b0ebecb"
  },
  {
    "url": "blog/maqz001400/index.html",
    "revision": "71b0351d4da890cfe5f1882b8b0ebecb"
  },
  {
    "url": "blog/takasaki/index.html",
    "revision": "56654b4f56ad11027e330212b3de463b"
  },
  {
    "url": "index.html",
    "revision": "5e595d891415ddfa1da51a8fb1dd5998"
  },
  {
    "url": "info.json",
    "revision": "6209dfaad1b045268626502896bdacbe"
  },
  {
    "url": "maqz/configulation/index.html",
    "revision": "62175beb87469e6365cf1bce8e813522"
  },
  {
    "url": "maqz/howtowrite/index.html",
    "revision": "9e42ab96bad3efc5937a7427551960f3"
  },
  {
    "url": "maqz/index.html",
    "revision": "7dfded653115c1151da0bc3704b2a212"
  },
  {
    "url": "maqz/pages/index.html",
    "revision": "f53d70127f7d958dded89a7439e821fc"
  },
  {
    "url": "maqz/theme/index.html",
    "revision": "3d59fd85675ed8a8ed1e70abe2b05ab5"
  },
  {
    "url": "workbox-sw.prod.v2.1.2.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  }
])
