---
title: maqz
description: 静的サイトビルダー「maqz」についてです。Jekyll以上Hugo以下といったところ。テーマの少なさが難点。
layout: article
---

## 今のサイト作成に満足していますか？

wixやはてな、fc2を利用すれば簡単に素晴らしいサイトやブログを作成できます。

しかし、例えばイベントやWiki等、大量のデータを公開したいときもあります。

maqzは、既存のパッケージを組み合わせたWebサイトビルドシステムです。  
何も特別なものはありません。このシステム自体はプログラミングに堪能な人ならば簡単に構築できるものです。  

つまりmaqzはいわゆる提案です。

maqzのシステムは、Wikiやブログを簡単に作成するのに最も適しています。  
それは、maqzがディレクトリ・ファイルの構造をデータベースとして扱い、JavaScriptにより簡単に操作できるからです。  
ES6によって強化された配列操作を利用すれば、目次や記事のコピー・ペースト作業はなくなります。

文書の生成のほかにも、スタイル・スクリプト・画像の最適化を同時に行うことができます。

**最強の自分だけのサイトを作りましょう!**

## 概要

オレオレ静的サイトビルダーです。

markdown(パースにKramDownを利用)やpug、htmlを読み込んで、テンプレートに適用し、サイトを出力します。ビルドにはタスク管理ツールgulpを利用しています。

~~つまり大して自分でコードは書いてないです。~~

[GitHub](https://github.com/tamaina/tamaina.github.io)

**編集にはVisual Studio Code等のIDEを利用することをお勧めします。**

## 説明書

- **[default.jsonの書き方](configulation)**
- **[文書の書き方](howtowrite)**
- **[ページ情報の使い方](pages)**
- **[テーマについて](theme)**

## 機能

- pjaxが標準で適用されています。
- PWAに対応しているかもしれません。
  * manifest.jsonを勝手に出力します。
  * Workboxを用いて、Service Workerの自動更新に対応しています。
- AMPにも対応しています。
  * ブログはAMPでも配信されています。
- Webpack + babel + uglifyでページ用スクリプトを近代的に製作できます。

## インストール

1. node.jsをインストールしてください。
2. 
```
npm install -g node-gyp
npm install -g gulp-cli
npm install
```

3. サイトを公開するなら**.config/default.json****.config/own.json**を編集してください。

## 文書を作成する

```
gulp new --path foo/hoge.md --layout default
```
→`pages/foo/hoge.md`が作成され、(インストールされていれば)Visual Studio Codeが開き、編集できるようになります。

- `--path`は必須です。`pages/`以下に入力したとおりのファイルが作成されます。
- `--layout`は`templates/`フォルダ内のmdファイルの名前を指定します。
  * 指定した雛形がコピーされます。
  * 指定しなければ`default`になります。
  * テンプレートの拡張子は.mdのみです。

`gulpfile.js`の一番初めの以下のコードを編集すると、実行時に開くエディタを指定できます。  
シェルで実行可能なプログラム名を指定してください。

```
const openCommand = "code"
```

**テキストエディタの例**

- `code` … Visual Studio Code (初期値)
- `code-insider` … Visual Studio Code Insider
- `notepad` … メモ帳(Windows)
- `TextEdit` … テキストエディット(macOS).
- `nano` … nano
- `code-insiders` … Visual Studio Code - insiders

## ビルド

### ただビルドする

```
gulp prebuild-files
gulp default
```

- `filesPrebuilt`タスクは、画像の圧縮をしながら`files/`フォルダ内の内容を準備します。
  * 重い画像圧縮タスクを分離したため、このような形になっています。
  * `files/`フォルダ内に変更を加えたら、必ず実行してください。
- 

### ブラウザで確認してみる

**この機能は現在作成中なので、動作しません。**ご不便をおかけします。

```
gulp server
```

正常にビルドできれば、`localhost:3000`に接続すると見ることができます。

このとき、debug_override.jsonの内容がdefault.jsonに上書きされます。

文書やテンプレートを更新すると、その都度ビルドし直します。

## 公開

**Service Workerの動作には、httpsが必須です。**

サイトを公開するなら**.config/default.json**及び**.config/own.json**を自分用に編集してください。

そしてビルドして、`docs/`以下を公開します。

GitHub Pagesを利用すれば無料で公開できますし、PHPを利用していないので一切のコードが利用できない無料サーバーでも利用することができます。

## ファイル

```
│ 
│
├─.config/default.json - サイトの大体の設定はここで行います。
├─────────────   pages - 基本的に文書はすべてここに格納します。
├─────────────   files - 添付ファイルはここに格納します。
│
├─── dist  ┐
│          └─files ┐   - grunt filesPrebuilt の結果がここに入ります。
│                  │     grunt default の度にこの内容がコピーされます。
│
├─── theme ┐           - スタイルやレイアウト、スクリプトが格納されています。
│          │
│          ├─  pug ┐   - htmlの素となるpugが保存されています。
│          │       │
│          │       ├── templates - レイアウトが格納されています。
│          │       │               default.pugを消してはいけません。
│          │       ├──     temp  - ビルドの際中間生成されるpugが格納されます。
│          │       └── includes  - 細かいファイルが格納されています。
│          │
│          ├─ styl ┐   - cssの素となるstylusが保存されています。
│          │
│          ├─ fonts┐   - サブセット前のフォントを格納しています。
│          │
│          ├─  js  ┐   - jsファイルが保存されています。
│          │       │
│          │       ├── main.js   - このファイルで一旦jsファイルを纏めています。
│          │       │               これをbrowserifyとuglifyに通してjsファイルを生成します。
│          │
│          └─ static ┐ - 変更が要らない静的なファイルを格納するフォルダです。
│                    │   ビルド時にdocs/にそのままコピーされます。
│                    │
│
├─── docs  ┐           - 出来上がったサイトです。このファイル公開してください。
│          │             GitHub Pagesでは、設定でここをサイトにできます。
│          │             ※ただし、ユーザーページでは不可
│          │             ビルドするごとに内容は消去されます。
│          │
│          ├─ assets ┐   - theme/static/からのコピーとビルドしたcss/jsを格納します。
│          │         │
│          ├─  files ┐   - files/はここにコピーされます。
│          │         │     .htaccessで制御を別に分けるときにとくに便利です。
│
├─── templates ┐         - grunt newのとき雛形として読みこまれます。
│              │
│              ├ default.md - 消してはいけません。
│              ├ hoge.md    - 雛形は自分で自由に追加できます。
│
├────────   .gitignore  ┐
├──────    .travis.yml  │
├──────    gulpfile.js  │
├─────────     LICENSE  │  配布に際して必要なファイルです。
├─────    package.json  │
├─   package-lock.json  │
├────    pugfilters.js  ┘
├──  webpack.config.js   - webpack設定ファイル。
├────────   index.html  ┐  GitHub Pagesのユーザーページがmasterしか参照できない仕様
│────────     404.html  ┘  のためdocs/にリダイレクトします。
└────────    readme.md   - サイトと併せてお読みください。
```
