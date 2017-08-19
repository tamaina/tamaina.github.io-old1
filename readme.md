# tmin.xyz

https://tmin.xyz

License: MIT License

## Build Info

![travis-ci badge](https://travis-ci.org/tamaina/tamaina.github.io.svg?branch=master)
![Greenkeeper badge](https://badges.greenkeeper.io/tamaina/tamaina.github.io.svg)

## How to Build

1. node.jsをインストールします
2. リポジトリをダウンロードします

```
npm i
npm i grunt-cli node-gyp -g
grunt
```

## Is it working well?

1. `grunt server`で起動します。
2. http://localhost:3000/MDBuilder/configulationにアクセスしてください。
3. ページの一番最後に`ANOTHER FOOTER! THIS IS ARTICLE LAYOUT!`と表示されていることを確認してください。
4. ページ上部の`tmin.xyz`をクリックします。
5. 移動先でも**3.**を確認します。
6. リロードしてください。**3.**の文章は消えているはずです。
7. ブラウザの[戻る]を利用して戻ってください。**3.**の文章は消えているはずです。

異常のことが確認できたら、恐らく正常に動いています。

実地環境(サーバー)で問題が起きるようでしたら、default.jsonの設定を**2.**のページとよく照らし合わせて確認してください。