---
title: 記事の書き方
description: 難しいことはありません。jekyllと同じだし。
---

# 記事の書き方

MarkDownかPugで書くことができます。難しいことはありません。難しいことを極力しないように作ったのですから。

MarkDownに関して言えば、jekyllと全く同じと言っていいでしょう。

また、PugもMarkDownとそんなに変わりありません。ただし、凝った装飾をするには、テーマのstylusを弄る必要があるでしょう。

# 雛形



## MarkDown

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

## Pug

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

`---～---`をFront Matterと呼びます。YML形式で情報を書いてもらうことで、情報を的確にテンプレートに流し込めます。
- layoutの設定値は`theme/pug/templates`のpugファイルの名前と一致します。
  * 書かれていなかったり一致しなかった場合、`default.pug`を利用します。
- permalinkは、強制的にURLを変更します。末尾にスラッシュがあると正しく機能しません。