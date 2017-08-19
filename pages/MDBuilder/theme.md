---
title: テーマ
description: テーマの編集方法
---

テーマファイルのソースは、themeフォルダに格納されています。

htmlの素のpugを**テンプレート**、cssの素のstylus(.styl)やcssファイルを**スタイル**と呼称します。

また、jsフォルダのjsファイルはスクリプトと呼称します。

# テンプレート

各文書のFront Matterの、layout:の値が、適用するテンプレートのファイル名です。

何も指定がなければdefault.pugを読みます。

## 書き方

pugの書き方に関しては、[pugjs.org](https://pugjs.org)を参照してください。

変数として`docs/info.json`の内容が利用可能です。[様々な配列操作](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array)を利用してページ一覧や検索機能を作成できます。

これは、テンプレートだけでなくpug形式の個々の文書でも利用できます。

さらに他になにか利用したい変数がある場合は、`Gruntfile.js`のオプションに書き足してください。

## テンプレートからページを書き出すしくみ

ビルドの様子をよく見ているとわかりますが、一時ファイルが`pug/templates`以下に書き出されます。

一時ファイルは、先頭に`pages`配列の要素の番号を代入するプログラムが1行書き加わってテンプレートがコピーされたものです。

`theme/pug/includes/_script.pug`の先頭で、`pages`配列のその番号の要素を参照し、その内容を`page`に代入しています。

# スタイル

main.stylファイルをコンパイルしてcssを出力しています。

stylusの書き方に関しては、[stylus-lang.com](http://stylus-lang.com/)を参照してください。

cssやstylusを追加するには、どこかにcss/stylファイルを作成・コピーし、それに応じて`@import`をmain.stylに追加します。