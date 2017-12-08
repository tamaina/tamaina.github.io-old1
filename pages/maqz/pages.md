---
title: pages処理チートシート
description: ページ配列 pagesの処理方法をかんたんにまとめました。
layout: article
---

## `pages`マップと要素(page)

`info.json`でjson化したデータを見ることができます。

便宜上pagesの各要素をpageと呼びます。

**これらの情報はビルド前に決定されます**ので、ビルド後のhtmlの情報は一切含まれていません。すべては`pages`フォルダ内のファイルから得られた情報です。

```json
{
    "pages": [
        {
            "meta": {
                "src": {
                    "root": "",
                    "dir": "pages/foo/bar",
                    "base": "hoge.md",
                    "ext": ".md",
                    "name": "hoge",
                    "subdir": "foo/bar"
                },
                "md5": "16373b01c4af2da0986dbdf1c0b413b4",
                "sha384": "OAZAV1YnEdrl6phd0dJT1rFBgkKTe3rYhCEbccJV4nzcrm/xoS5SN2OmfjsZkTZk",
                "mtime": "2100-12-26T09:13:20.778Z",
                "birthtime": "2017-08-18T19:35:21.010Z",
                "permalink": "/foo/bar/hoge/"
            },
            "attributes": {
                "title": "ほげほげ",
                "description": "ほげほげ、ふー、ばー！何か概要を書くよ！",
                "layout": "article",
                "date": "2100-12-26T09:13:20.778Z",
                "published": "true"
            },
            "body": "MARKDOWNの例\n\n## 見出し！ \n\n本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文",
            "stats": {
                "dev": 3807904075,
                "mode": 33206,
                "nlink": 1,
                "uid": 0,
                "gid": 0,
                "rdev": 0,
                "ino": 2814749767140380,
                "size": 235,
                "atimeMs": 1503084921010,
                "mtimeMs": 1508516542000.563,
                "ctimeMs": 1508516542000.563,
                "birthtimeMs": 1503084921010.212,
                "atime": "2017-08-18T19:35:21.010Z",
                "mtime": "2017-10-20T16:22:22.001Z",
                "ctime": "2017-10-20T16:22:22.001Z",
                "birthtime": "2017-08-18T19:35:21.010Z"
            }
        }
    ]
}
```

### `.meta`

metaにはビルド時に必要と思われる情報をまとめて記述しています。attributesとstatsのどちらかを選択したり、ソースの情報が挿入されたりしています。

頻繁に利用する配列といえます。

#### `.meta.src`, `.meta.src.subdir`

`meta.src`にはnode.jsの[path.parse()](https://nodejs.org/api/path.html#path_path_parse_path)で得られた情報が格納されます。

さらに、

#### `.meta.md5`, `.meta.sha384`

`body`の内容を各ハッシュ値にしてあります。

#### `.meta.mtime`, `.meta.birthtime`

`mtime`は更新日時、`birthtime`は作成日時が挿入されています。

通常は`stats`の値がそのまま挿入されますが、yaml front-matterで各値を書き換えるとここに反映されます。

#### `.meta.premalink`

必ず`/`から始まり`/`で終わるリンクが格納されています。

### `.attributes`

`frontmatter`が加工されたマップです。npmパッケージ「front-matter」が生成します。

### `.body`

npmパッケージ「front-matter」によってソースファイルのfront-matterと本文が分離し、本文のみ挿入されています。

元ファイルの開業コードがCR+LFであっても、JavaScriptで処理する限り不要であるため\rは消去されます。

### `.stats`

[node.jsのfs.Stats](https://nodejs.org/api/fs.html#fs_class_fs_stats)がそのまま格納されます。

## pages配列の使い方の例

json形式ですので、javascriptで配列として様々な加工をすることができます。

基本的にはpugで処理する形になりますが、他のテンプレートエンジンでももちろん大丈夫です。

### ディレクトリ以下を羅列する

→ソースの`pages/blog/index.pug`をお読みください。

### 更新日時が前のページ・次のページを表示する

→ソースの`theme/pug/blog.pug`をお読みください。