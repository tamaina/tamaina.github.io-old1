---
title: Markdown代入テスト
description: \${~}を利用して特定の内容を代入することができます。
layout: blog
category: なにか
tag: なにか
---


[前の記事…… ${pagePrev.attributes.title}](${pagePrev.meta.permalink})  
[次の記事…… ${pageNext.attributes.title}](${pageNext.meta.permalink})  
この記事のソースのmd5ハッシュ値は"${page.meta.md5}"です。

```
[前の記事…… \${pagePrev.attributes.title}](\${pagePrev.meta.permalink})  
[次の記事…… \${pageNext.attributes.title}](\${pageNext.meta.permalink})  
この記事のソースのmd5ハッシュ値は"\${page.meta.md5}"です。
```

(前の記事・次の記事は`pagePrev`/`pageNext`というマップにページ情報が記録されています(blogテンプレートの機能。))

2かける3は${ 2 * 3 }です。

```
2かける3は\${ 2 * 3 }です。
```