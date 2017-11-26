---
title: bootstrap v4について
description: bootstrapは、言わずと知れたフレームワーク。v4は、いよいよbetaになりました。
layout: blog
category: web
tag: bootstrap
amp: true
---

長い年月をかけて、bootstrap v4がいよいよbetaになりました。待ち飽きたと思います。

もう[bootstrapのサイト](//getbootstrap.com)はbootstrap v3から差し替わっています。

ついこの前まではv4-alpha.6を利用していましたが、この新しいサイトはbetaを利用しています。

## 基本的な使い方

- 置くだけでも適当に設定してくれる
- `.container`で文書に適切な幅にする
- **navbar**をパパっと作る
  * betaから`.sticky-top`が使える！
- `.row`, `.col-**-n`で簡単幅指定
- リンクに`.btn.btn-link`などを適用してスマホでも押しやすくする
- 多種多様なコンポーネントを使ってデザインをまとめる

## alphaからbetaになって変わったこと

- popper.jsを利用するようになった
  * ドロップダウンが面白いことになってます。
- ビルドの仕方が変わった
  * alphaまでのビルド方法は全く通用しません。