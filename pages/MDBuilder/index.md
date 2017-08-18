---
title: About MDBuilder
description: 静的サイトビルダー MarkDown Builderについて
layout: default
---
# About MDBuilder

オレオレ静的サイトビルダーです。

核となる機能は、文書のMarkDown(パースにKramDownを利用)やpug、htmlを読み込んで、テンプレートに適用し、サイトを出力します。

ビルドにはタスク自動化ツールGruntを利用しています。

[GitHub](https://github.com/tamaina/tamaina.github.io)


## Configulation

[default.jsonの書き方](./configulation)

## How to add a page

[文書の書き方](./howtowrite)

## How to change looks

[テーマについて](./theme)

## ファイル
```
│ 
│
├─.config/default.json - サイトの大体の設定はここで行います。
├─────────────   pages - 基本的に文書はすべてここに格納します。
├─────────────   files - 添付ファイルはここに格納します。
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
│          │       │
│          │
│          ├─ fonts┐   - サブセット前のフォントを格納しています。
│          │       │
│          │
│          ├─  js  ┐   - jsファイルが保存されています。
│          │       │
│          │       ├── main.js   - このファイルで一旦jsファイルを纏めています。
│          │       │               これをbrowserifyとuglifyに通してjsファイルを生成します。
│          │       │
│          │
│          └─ static ┐ - 変更が要らない静的なファイルを格納するフォルダです。
│                    │   ビルド時にdocs/にそのままコピーされます。
│                    │
│
├─── docs  ┐           - 出来上がったサイトです。これをデプロイしてください。
│          │             GitHub Pagesでは、設定でここをサイトにできます。
│          │             ※ただし、ユーザーページでは不可
│          │             ビルドするごとに消去されます。
│          │
│          ├─ assets ┐   - theme/static/からのコピーとビルドしたcss/jsを格納します。
│          │         │
│          │
│          ├─  files ┐   - files/はここにコピーされます。
│          │         │
│          │         
│          ├─  CNAME     - GitHub Pagesを利用すると自動的に生成されます。
│          │
│
├────────   .gitignore  ┐
├──────    .travis.yml  │
├─────    Gruntfile.js  │
├─────────     LICENSE  │  配布に際して必要なファイルです。
├─────    package.json  │
├─   package-lock.json  │
├────    pugfilters.js  ┘
├────────   index.html  ┐  GitHub Pagesのユーザーページがmasterしか参照できない仕様
│────────     404.html  ┘  のためdocs/にリダイレクトします。
└────────    readme.md   - サイトと併せてお読みください。
```

## 足りない機能

- スタイル指定がほとんどありません。
  * スタイル指定はstylusで指定します。

## 余分な機能

- barba.jsが標準で適用されています。
- 日本語ウェブフォントが標準で適用されています。
- browserify+uglifyです。

## インストール

```
npm install -g node-gyp
npm install -g grunt
npm install
```

## ビルド

### ただビルドする

```
grunt
```

### ブラウザで確認してみる/変更したらすぐビルドする

```
grunt server
```

→正常に動作すれば、`localhost:3000`に接続すると見られます。
