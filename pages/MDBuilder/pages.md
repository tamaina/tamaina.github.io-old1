---
title: pages処理チートシート
description: ページ配列pagesの処理方法をかんたんにまとめました。
layout: article
---

## pages配列と要素(page)

`info.json`でjson化したデータを見ることができます。pages

```json
{
    "pages": [
        {
            "attributes": {
                "title": "タイトル",
                "description": "説明文",
                "layout": "blog",
                "permalink": "/foo/bar/hoge",
                "published": "true",
                "tags": [
                    "foo"
                ],
                "categories": [
                    "baz"
                ]
            },
            "body": "\r\nここに内容が入っています\r\n\r\n## 見出し\r\n\r\n本文本文本文本文本文本文本文本文本文",
            "frontmatter": "title: タイトル\r\ndescription: 説明文\r\nlayout: blog\r\ncategory: foo\r\ntag: bar",
            "srcname": "hoge",
            "srcext": ".md",
            "subdir": "foo/bar",
            "md5": "1s1e4n5p1a4i1h9o1m9o810893889464",
            "stats": {
                "dev": 3807904075,
                "mode": 33206,
                "nlink": 1,
                "uid": 0,
                "gid": 0,
                "rdev": 0,
                "ino": 3377699720584995,
                "size": 1246,
                "atimeMs": 1503326972617.0002,
                "mtimeMs": 1503749014742.5215,
                "ctimeMs": 1503749014742.5215,
                "birthtimeMs": 1503300474679.8806,
                "atime": "2017-08-21T14:49:32.617Z",
                "mtime": "2017-08-26T12:03:34.743Z",
                "ctime": "2017-08-26T12:03:34.743Z",
                "birthtime": "2017-08-21T07:27:54.680Z"
            }
        }
    ]
}
```