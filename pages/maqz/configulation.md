---
title: default.jsonの書き方
description: どんなサイトビルダーでも、設定ファイルは必須です。情報の変数化は楽をするための第一歩です。
layout: article
---

## 使い方

`.config`フォルダ内にjson形式で格納されます。

`default.json`と`own.json`は同じ形式で、`site`変数として処理中に取り出すことができます。

`debug_override.json`は、デバッグやテストの際に`site`変数に上書きするための情報です。

`messages.json`は、ビルドの際のメッセージが格納されています。

あとはフィーリングで。バージョンが変わると構造に破壊的な変更が加わる可能性がありますが、ご了承ください。