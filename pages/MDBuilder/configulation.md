---
title: default.jsonの書き方
description: 設定ファイルは基本だよね。
layout: article
---

`./config/default.json`にあります。

~~~json
{
    "name": "tamaina's website",
    "short_name": "tmin.xyz",
    "description": "tamainaことaqzのサイトです。",
    "url":{
        "path": "/docs",
        "host": "tmin.xyz",
        "scheme": "https"
    },
    "sources": [
        "pages/**/*.md",
        "pages/**/*.pug",
        "pages/**/*.html"
    ],
    "auther": "tamaina",
    "page_namingrule": "name",
    "locale": "ja",
    "icons": [
        {
            "path": "/assets/images/icons/favicon-16x16.png",
            "sizes": "16x16",
            "type": "image/png"
        },
        {
            "path": "/assets/images/icons/favicon-600x600.png",
            "sizes": "600x600",
            "type": "image/png"
        }
    ],
    "mstiles": {
        "s70x70": {
            "path": "/assets/images/icons/mstile-70x70.png"
        },"w310x150": {
            "path": "/assets/images/icons/mstile-310x150.png"
        }
    },
    "theme_color": {
        "primary": "#2d88ef",
        "secondary": "#001c3d"
    },
    "default": {
        "template": "default"
    },
    "rss_url": "https://github.com/tamaina/tamaina.github.io/commits/master.atom",
    "twitter_screenname": "t_ma1n",
    "workers": [
        {
            "srcpath": "theme/js/service_worker.js",
            "outname": "service_worker"
        }
    ],
    "manifest": {
        "start_url": "/docs/",
        "display": "standalone"
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
- サイトのURLです。url.pathは末尾のスラッシュを含めない形で書きます。ドメイン直下にサイトを置くなら、空欄。

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
- こんなになくても512x512以上のサイズが1つあれば良い気がする
- ルートフォルダのfavicon.icoは固定してテーマに挿入済です。`theme/static`直下に入れておけば認識します。

## icons[*i*].path
- ***`String`*** (URL)
- **必ずスラッシュから始めます。**

## mstiles
- ***`Array`*** (連想配列)
- browserconfig.ymlに利用します。考え方はiconsと同じです。

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

## manifest
- ***`Array`*** (連想配列)
- manifest.jsonに出力する内容です。
- 既に挿入されているデータは、Gruntfile.jsの最後の方、`register_manifest()`の中をご覧ください。
- 一応、manifest.jsonの全てのデータもpugに変数として流しています。