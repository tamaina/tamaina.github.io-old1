---
title: Gruntをgulpに ･ Font Awesomeを5にした話
description: タイトルの通りです。情報が少ないうちに簡単な導入方法を書いてみます。
layout: blog
category: web
amp: true
---

## Font Awesome 5

### 更新の概要

サイトは[Font Awesome 5 fontawesome.com](https://fontawesome.com/)  
URLも従来の.ioから移転されました。  
[v4からのアップデートガイド](https://fontawesome.com/how-to-use/upgrading-from-4)もあり、かなり優しい説明書になっています。

- お金を払ってより多くのアイコンを手に入れることができる、Proバージョンができました。
  * 従来から比べて不便になるようなことは全くありません。  
  * ProではLightウェイト(後述)等"違い"のあるアイコンを利用できます。
- [導入方法](https://fontawesome.com/get-started)が増えました。
  * [**JavaScriptとSVGによる描画**](https://fontawesome.com/get-started/svg-with-js)が新たに追加されました。今バージョンではこれが推奨されています。
    * ページをパースし、自動的に`&lt;style&gt;`タグと`&lt;i&gt;`タグの中にsvgを生成します。
    * [npmパッケージ](https://www.npmjs.com/package/@fortawesome/fontawesome)を用いれば、[サーバー(node.js)サイドで事前にSVGを埋め込む](https://fontawesome.com/get-started/advanced-options)こともできます。詳細は後述。
  * もちろん、[従来のCSSとWebFontを用いたバージョン](https://fontawesome.com/get-started/web-fonts-with-css)でも可能です。
  * [フォントをパソコンにインストールすれば](https://fontawesome.com/get-started/desktop)、OpenTypeの合字として表示することができます。
    * 対応しているソフトや使う場所が限られていますが、特にデザイナーはかなり重宝しそうです！
- アイコンの種類が明確に分かれました。
  * **Solid**(塗りつぶし), **Regular**(線・標準の太さ), *light*(線・細い *Proのみ*), **Brands**(ブランド)の4種類があります。
- `fa`プレフィックスに代わり、種類ごとのプレフィックス`fas`,`far`,*`fal`*,`fab`になりました。
  * 例えば`&lt;i class="fab line"&gt;&lt;/i&gt;`,`&lt;i class="fas clock"&gt;&lt;/i&gt;`など。
- 種類分けに併せて、アイコンの命名が変わりました。
  * より論理的に、そして無垢になりました。
  * 4から利用している方は要注意です。しかしご安心ください。`fa-v4-shim.js`を利用すれば、そのままで大丈夫です。
  * [→ アップデートガイド](https://fontawesome.com/how-to-use/upgrading-from-4)を参照してください。

### maqzでの導入例

サイトビルダー等の事前処理ができる状況においては、JavaScriptの処理をビルド時にしてしまいたいと誰もが思うはずです。

前述のとおり、npmパッケージによってそれができるようになりました。

以下に例を示しますが、APIの説明をすっとばして実使用の場合のみを想定しています。  
詳しくは[APIの説明](https://fontawesome.com/how-to-use/font-awesome-api)を読んでください。  
ブラウザとnode.js双方の仕様についてたいへんわかりやすく書かれています。

以下に、node.jsを用いて必要なcssとHTMLタグを出力する方法を示します。

#### 4ステップで導入!

数学の問題集じゃないけどね！

##### ① 必要なパッケージをインストールします
```
npm i --save-dev @fortawesome/fontawesome @fortawesome/fontawesome-free-solid @fortawesome/fontawesome-free-regular @fortawesome/fontawesome-free-brands
```

##### ② **初期設定**はこのようにします
```
// fa本体
const fontawesome = require("@fortawesome/fontawesome")

// faライブラリ
const faSolid = require("@fortawesome/fontawesome-free-solid")
const faRegular = require("@fortawesome/fontawesome-free-regular")
const faBrands = require("@fortawesome/fontawesome-free-brands")

// faライブラリ登録
fontawesome.library.add(faSolid, faRegular, faBrands)
```

##### ③ スタイルを設定します。

次の関数は必要なcssを返しますので、cssとして適用されるようにうまく埋め込みます。  
```
fontawesome.dom.css() //:string (css)
```

##### ④ HTMLを埋め込みます。

以下に示すようなコードが**html(svgタグ)**を返します。

- prefixには種類に応じたプレフィックスを指定します。
- iconはアイコン名を指定します。
- optionについては[APIの説明](https://fontawesome.com/how-to-use/font-awesome-api#icon)を見てください。

.htmlプロパティは、svgタグ文字列の**配列**を返してきます。何も考えず[0]を指定しましたが、多分大丈夫だと思います…
```
const $prefix = "fab"
const $icon = "line"
const $option = { classes: ["fa-fw"] }

fontawesome.icon({ prefix: $prefix , iconName: $icon }, $option ).html[0] //:string (svgタグ)
```

SVGタグはiタグ等で囲わずともそのまま利用できます。以前に比べ、外部ファイルの参照がなくなり、読み込みデータ量もかなり少なくなりました。

## Grunt → gulp

思い立ったが吉日、ついに変えました。しかも**gulp v4**。

名前は似ていますがこいつら**完全に別物**です。

関数等は使いまわしましたが、多くの処理は完全に新規に書き起こしたようなものです。

半分ぐらい早くなったと思います。速さのほかにも、Streamを利用すればいちいちファイルを書きださなくて済むというところが楽でいいです。

移転にあたっては、よくわからない処理のリファクタリングもしました。まだ未確認のバグがあるかもしれませんが使っているうちに治るでしょう。