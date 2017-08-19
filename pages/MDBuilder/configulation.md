---
title: default.jsonの書き方
description: 設定ファイルは基本だよね。
layout: article
---

# default.jsonの書き方

`./config/default.json`にあります。

~~~json
    {
        "name": "tamaina's website",
        "description": "tamainaことaqzのサイトです。",
        "sources": [
            "pages/**/*.md",
            "pages/**/*.pug",
            "pages/**/*.html"
        ],
        "url":{
            "path": "/docs",
            "host": "tmin.xyz",
            "scheme": "https",
        },
        "auther": "tamaina",
        "page_namingrule": "name",
        "locale": "ja",
        "icons": [
            {
                "path": "/images/icons/favicon-16x16.png",
                "sizes": "16x16",
                "type": "image/png"
            },
            {
                "path": "/images/icons/favicon-196x196.png",
                "sizes": "196x196",
                "type": "image/png"
            }
        ],
        "theme_color": "#ffffff",
        "default": {
            "template": "default"
        },
        "rss_url": "https://github.com/tamaina/tamaina.github.io/commits/master.atom",
        "twitter_screenname": "t_ma1n",
        "worker": {
            "srcpath": "theme/js/service_worker.js",
            "outname": "service_worker"
        }
    }
~~~

## name
- ***`String`***
- サイト全体の名前です。

## description
- ***`String`***
- サイトの説明です。

## url
- ***`Array`***
- サイトのURLです。url.pathは末尾のスラッシュを含めない形で書きます。ドメイン直下にサイトを置くなら、空欄に。

## sources
- ***`Array`***
- 読み込むファイルを指定します。

## auther
- ***`String`***
- 一般的には貴方のハンドルネームが入るでしょう。

## page_namingrule
- ***`String`***
- 命名規則です。nameにすると普通になります。
- ディレクトリ構造はそのままです。htmlの名前だけが変わります。
- 以下の値を用意しています。
  - **`name`:** 現在は元のファイル名を維持する
  - **`birthtime`:** 作成日時 (YYYY-MM-DD-hh-mm-ss.msec)
  - **`md5`:** 「md5ハッシュ」と呼ばれるランダムな英数字
  - 文書内のリンク読み替える機能ありませんので、こだわりがなければnameを利用するべきです。

## locale
- ***`String`***
- html(lang=)に適用する言語です。

## icons
- ***`Array`***
- アイコンを登録します。

## icons[*i*].path
- ***`String`*** (URL)
- **必ずスラッシュから始めます。**

## theme_color
- ***`String`*** (Color)
- テーマカラーを指定します。別の値に設定して、AndroidのChromeで見てみてください。

## default
- ***`Array`*** (連想配列)
- デフォルト値を設定します。

## default.template
- ***`String`***
- デフォルトで使用するテンプレートを指定します。
- Front Matterのlayoutが指定されていなかったり、参照できなかったときに利用されます。

## rss_url
- ***`String`*** (URL)
- linkするRSSのURLを指定します。例ではgithubの更新情報を指定しています。

## twitter_screenname
- ***`String`***
- twitter cardに設定するtwitterアカウントを指定します。

## worker.srcpath
- ***`String`***
- Service Workerのソースファイルのパスを指定します。

## worker.outname
- ***`String`***
- Service Workerの出力時の名前を指定します。
- Service Workerでは、package.versionの値を変数`version`として利用できます。
- バックグラウンド同期のためのものですが、