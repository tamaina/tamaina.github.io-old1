---
title: default.jsonの書き方
description: 設定ファイルは基本だよね。
layout: article
---

## `config/default.json`

~~~json
{
    "name": "tmin.xyz",
    "short_name": "tmin.xyz",
    "description": "aqzのサイト",
    "url":{
        "path": "/docs",
        "host": "tmin.xyz",
        "scheme": "https"
    },
    "sources": {
        "document": [
            "pages/**/*.md",
            "pages/**/*.pug",
            "pages/**/*.html"
        ]
    },
    "auther": "tamaina",
    "page_namingrule": "name",
    "locale": "ja",
    "mstiles": {
        "s70x70": {
            "path": "/files/images/icons/mstile-70x70.png"
        },"s144x144": {
            "path": "/files/images/icons/mstile-144x144.png"
        },"s150x150": {
            "path": "/files/images/icons/mstile-150x150.png"
        },"s310x310": {
            "path": "/files/images/icons/mstile-310x310.png"
        },"w310x150": {
            "path": "/files/images/icons/mstile-310x150.png"
        }
    },
    "theme_color": {
        "primary": "#2d88ef",
        "secondary": "#0e51a0"
    },
    "site_card_path": "/files/images/icons/favicon-600x600.png",
    "default": {
        "template": "default"
    },
    "social_media" : {
        "twitter": {
            "stalk": "aqzti",
            "share": true,
            "card": true
        },
        "LINE": {
            "stalk": false,
            "share": true
        },
        "facebook": {
            "stalk": false,
            "share": true
        },
        "flickr": {
            "stalk": "150974953@N07",
            "share": false
        },
        "github": {
            "stalk": "tamaina",
            "share": false
        },
        "share_button": true
    },
    "rss_url": "https://github.com/tamaina/tamaina.github.io/commits/master.atom",
    "manifest": {
        "start_url": "./",
        "display": "minimal-ui"
    },
    "icons": [
        {
            "path": "/files/images/icons/favicon-16x16.png",
            "sizes": "16x16",
            "type": "image/png"
        },
        {
            "path": "/files/images/icons/favicon-32x32.png",
            "sizes": "32x32",
            "type": "image/png"
        },
        {
            "path": "/files/images/icons/favicon-36x36.png",
            "sizes": "36x36",
            "type": "image/png"
        },
        {
            "path": "/files/images/icons/favicon-48x48.png",
            "sizes": "48x48",
            "type": "image/png"
        },
        {
            "path": "/files/images/icons/favicon-57x57.png",
            "sizes": "57x57",
            "type": "image/png"
        },
        {
            "path": "/files/images/icons/favicon-60x60.png",
            "sizes": "60x60",
            "type": "image/png"
        },
        {
            "path": "/files/images/icons/favicon-72x72.png",
            "sizes": "72x72",
            "type": "image/png"
        },
        {
            "path": "/files/images/icons/favicon-76x76.png",
            "sizes": "76x76",
            "type": "image/png"
        },
        {
            "path": "/files/images/icons/favicon-96x96.png",
            "sizes": "96x96",
            "type": "image/png"
        },
        {
            "path": "/files/images/icons/favicon-114x114.png",
            "sizes": "114x114",
            "type": "image/png"
        },
        {
            "path": "/files/images/icons/favicon-120x120.png",
            "sizes": "120x120",
            "type": "image/png"
        },
        {
            "path": "/files/images/icons/favicon-152x152.png",
            "sizes": "152x152",
            "type": "image/png"
        },
        {
            "path": "/files/images/icons/favicon-160x160.png",
            "sizes": "160x160",
            "type": "image/png"
        },
        {
            "path": "/files/images/icons/favicon-180x180.png",
            "sizes": "180x180",
            "type": "image/png"
        },
        {
            "path": "/files/images/icons/favicon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "path": "/files/images/icons/favicon-196x196.png",
            "sizes": "196x196",
            "type": "image/png"
        },
        {
            "path": "/files/images/icons/favicon-600x600.png",
            "sizes": "600x600",
            "type": "image/png"
        }
    ]
}
~~~

### name
- ***`String`***
- サイト全体の名前です。

### description
- ***`String`***
- サイトの説明です。

### url
- ***`Array`***
- サイトのURLです。url.pathは末尾のスラッシュを含めない形で書きます。ドメイン直下にサイトを置くなら、空欄。

### sources
- ***`Array`***
- 読み込むファイルを指定します。

### auther
- ***`String`***
- 一般的には貴方のハンドルネームが入るでしょう。

### page_namingrule
- ***`String`***
- 命名規則です。nameにするとソースのdocs/以下そのままの配置になります。
- ディレクトリ構造はそのままです。htmlの名前だけが変わります。
- 以下の値を用意しています。
  - **`name`:** 現在は元のファイル名を維持する
  - **`birthtime`:** 作成日時 (YYYY-MM-DD-hh-mm-ss.msec)
  - **`md5`:** 「md5ハッシュ」と呼ばれるランダムな英数字
  - **文書内のリンク読み替える機能ありませんので、こだわりがなければnameを利用するべきです。**

### locale
- ***`String`***
- html(lang=)に適用する言語です。

### icons
- ***`Array`***
- アイコンを登録します。
- こんなになくても512x512以上のサイズが1つあれば良い気がする
- ルートフォルダのfavicon.icoは固定してテーマに挿入済です。`theme/static`直下に入れておけば認識します。

### icons[*i*].path
- ***`String`*** (URL)
- **必ずスラッシュから始めます。**

### mstiles
- ***`Array`*** (連想配列)
- browserconfig.ymlに利用します。考え方はiconsと同じです。

### theme_color
- ***`String`*** (Color)
- テーマカラーを指定します。別の値に設定して、AndroidのChromeで見てみてください。

### default
- ***`Array`*** (連想配列)
- デフォルト値を設定します。

### default.template
- ***`String`***
- デフォルトで使用するテンプレートを指定します。
- Front Matterのlayoutが指定されていなかったり、参照できなかったときに利用されます。

### rss_url
- ***`String`*** (URL)
- linkするRSSのURLを指定します。例ではgithubの更新情報を指定しています。

### social_media
- ***`Array`***
- SNSに関する設定を行います。
- 慣例的に、`stalk`にフォロー/ストークさせたいID(なければfalse)、`share`にシェアするかどうかのtrue / falseを設定します。
- `socail_media.twitter.card`は、サイトにTwitter Card用のメタデータを埋め込むかどうかをtrue / falseで設定します。

### manifest
- ***`Array`*** (連想配列)
- manifest.jsonに出力する内容です。
- 既に挿入されているデータは、Gruntfile.jsの最後の方、`register_manifest()`の中をご覧ください。
- 一応、manifest.jsonの全てのデータもpugに変数として流しています。

##  `config/own.json`

**自分サイトを公開する時、絶対に変えて欲しい変数です。**

### social_media.facebook.appId

facebookのappId