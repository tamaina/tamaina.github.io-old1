---
title: 文書の書き方
description: 難しいことはありません。jekyllと同じだし。
layout: article
---

MarkdownかPugで書くことができます。難しいことはありません。難しいことを極力しないように作ったのですから。

Markdownに関して言えば、扱い方は**jekyllと全く同じ**と言っていいでしょう。

また、PugもMarkdownとそんなに変わりありません。ただし、凝った装飾をするには、テンプレートを弄っていく必要が出てくるでしょう。

ちなみにPugは`md:`でMarkdownで書き始められます。

## 雛形

### Markdown

```markdown
---
title: タイトル
description: 説明
layout: default
# permalink: hoge/foooo
---
# タイトル

本文

kramdownでhtmlに変換します！

```

### Pug

```pug
---
title: タイトル
description: 説明
layout: default
# permalink: hoge/foooo
---
h1 #{page.attributes.title}
p #{page.attribute.description}
p page.attributeからFront Matterの設定値を参照できます!
p docs/info.jsonの内容を全て参照できます。記事一覧を作ったり、サイトの情報を変数に置き換えられます。
```

## 簡単な説明

`---～---`をFront Matterと呼びます。YML形式で情報を書いてもらうことで、情報を的確にテンプレートに流し込めます。
- layoutの設定値は`theme/pug/templates`のpugファイルの名前と一致します。
  * 書かれていなかったり一致しなかった場合、`default.pug`を利用します。
- permalinkは、強制的にURLを変更します。末尾にスラッシュがあると正しく機能しません。
- pugからは、[テンプレート](./templates#theme)と同じように`docs/info.json`の内容を利用できます。

## 画像を挿入する

### Markdownの場合

通常通り、`![説明](URL)`と書きます。

URLは、事故を防ぐために、スラッシュから始めて書くことをお勧めします。

ただし、スラッシュから始めると、ドメインのすぐ次からのURLを書く必要があります。

例えば、サイトのトップページが`https://tmin.xyz/docs`で、`files/image.png`という画像を挿入する場合、`/docs/files/image.png`と書くとよいです。

たぶん将来VS Codeの画面にドラッグ・アンド・ドロップすれば自動で挿入してくれる拡張機能を誰か作ってくれると思う。

### pugの場合

`${site.site_url}`を利用します。サイトのURLの変化にも対応できます。

例えば、`files/image.png`という画像を挿入する場合、~a(href=`${site.site_url}/files/image.png`~と書くとよいです。