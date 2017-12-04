self.importScripts('/docs/workbox-sw.prod.v2.1.2.js')

const workboxSW = new self.WorkboxSW()
workboxSW.precache([
  {
    "url": "404/index.html",
    "revision": "b55d47ddb61b4d4c68b19d6582c96fb8"
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
    "revision": "305d151a917fc618151c1dbea39a8db5"
  },
  {
    "url": "blog/about_me/index.html",
    "revision": "305d151a917fc618151c1dbea39a8db5"
  },
  {
    "url": "blog/bootstrap-v4-beta/amp.html",
    "revision": "138caf5cfa0ce03f11a55243b1907ede"
  },
  {
    "url": "blog/bootstrap-v4-beta/index.html",
    "revision": "138caf5cfa0ce03f11a55243b1907ede"
  },
  {
    "url": "blog/bunkasai/amp.html",
    "revision": "ebc4266dce00efe7f6d5bb844897ae8e"
  },
  {
    "url": "blog/bunkasai/index.html",
    "revision": "ebc4266dce00efe7f6d5bb844897ae8e"
  },
  {
    "url": "blog/category/aqz/index.html",
    "revision": "61648eaa760885ba99170fa31903ceed"
  },
  {
    "url": "blog/category/index.html",
    "revision": "978301f3ab71b12d223bb2e32aef4584"
  },
  {
    "url": "blog/category/web/index.html",
    "revision": "90f40d69e6913f0b0dc4f77a758c1fb2"
  },
  {
    "url": "blog/category/なにか/index.html",
    "revision": "a50d0752cf44c2fb635b8d7c4f0c5079"
  },
  {
    "url": "blog/category/趣味/index.html",
    "revision": "e483ad5d67ad9ca8ddcc233c739fe690"
  },
  {
    "url": "blog/chirno_intro/amp.html",
    "revision": "edaf94917b75195c38516c190fde731f"
  },
  {
    "url": "blog/chirno_intro/index.html",
    "revision": "edaf94917b75195c38516c190fde731f"
  },
  {
    "url": "blog/getval_test/amp.html",
    "revision": "266e7f05327fd887943b8ed351ba37e5"
  },
  {
    "url": "blog/getval_test/index.html",
    "revision": "266e7f05327fd887943b8ed351ba37e5"
  },
  {
    "url": "blog/hachikou/amp.html",
    "revision": "2c6c373fd7524027c16aa04d5eb84f1d"
  },
  {
    "url": "blog/hachikou/index.html",
    "revision": "2c6c373fd7524027c16aa04d5eb84f1d"
  },
  {
    "url": "blog/index.html",
    "revision": "ed3d756e5d4b88f98c1f87f9e2c342bd"
  },
  {
    "url": "blog/maqz001400/amp.html",
    "revision": "c065b5eba1659db821d542ff8ca4be5b"
  },
  {
    "url": "blog/maqz001400/index.html",
    "revision": "c065b5eba1659db821d542ff8ca4be5b"
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
    "revision": "4bb5ec5feca94fdd2bd4a9901b1b1523"
  },
  {
    "url": "maqz/configulation/index.html",
    "revision": "8c16acf22afeccaf982f4366feda11ac"
  },
  {
    "url": "maqz/howtowrite/index.html",
    "revision": "e84d836f884c3bc182b0cf99f4bdd272"
  },
  {
    "url": "maqz/index.html",
    "revision": "17947e5c696910c260d3f98e62053a3f"
  },
  {
    "url": "maqz/pages/index.html",
    "revision": "752d2a12766952f9bdd55fea65e821df"
  },
  {
    "url": "maqz/theme/index.html",
    "revision": "e4e3c432abb5800e6953670e9dd8e51e"
  },
  {
    "url": "workbox-sw.prod.v2.1.2.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  }
])
