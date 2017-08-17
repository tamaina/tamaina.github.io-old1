---
title: default.jsonの書き方
description: 設定ファイルは基本だよね。
---

# default.jsonの書き方

`./config/default.json`にあります。

~~~json
    {
        "name": "tamaina's website",
        "description": "tamainaことaqzのサイトです。",
        "site_url": "https://tmin.xyz",
        "sources": [
            "pages/**/*.md",
            "pages/**/*.pug"
        ],
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
        "rss_url": "https://github.com/tamaina/tamaina.github.io/commits/master.atom",
        "twitter_screenname": "t_ma1n"
    }
~~~

## name
- **`String`**
- サイト全体の名前です。

## description
- **`String`**
- サイトの説明です。

## site_url
- **`String`**
- サイトのURLです。末尾のスラッシュは不要です。

## sources
- **`Array`**
- 読み込むファイルを指定します。

## auther
- **`String`**
- 一般的には貴方のハンドルネームが入るでしょう。

## page_namingrule
- **`String`**
- 命名規則です。nameにすると普通になります。
- ディレクトリ構造はそのままです。htmlの名前だけが変わります。
- 現在は元のファイル名を維持する`name`と、作成日時にする`birthtime`が利用可能です。

## locale
- **`String`**
- html(lang=)に適用する言語です。

## icons
- **`Array`**
- アイコンを登録します。

## theme_color
- **`String`** (Color)
- テーマカラーを指定します。別の値に設定して、AndroidのChromeで見てみてください。

## rss_url
- **`String`** (URL)
- linkするRSSのURLを指定します。例ではgithubの更新情報を指定しています。

## twitter_screenname
- **`String`**
- twitter cardに設定するtwitterアカウントを指定します。