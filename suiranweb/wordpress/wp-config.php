<?php
/**
 * WordPress の基本設定
 *
 * このファイルは、インストール時に wp-config.php 作成ウィザードが利用します。
 * ウィザードを介さずにこのファイルを "wp-config.php" という名前でコピーして
 * 直接編集して値を入力してもかまいません。
 *
 * このファイルは、以下の設定を含みます。
 *
 * * MySQL 設定
 * * 秘密鍵
 * * データベーステーブル接頭辞
 * * ABSPATH
 *
 * @link http://wpdocs.sourceforge.jp/wp-config.php_%E3%81%AE%E7%B7%A8%E9%9B%86
 *
 * @package WordPress
 */

// 注意: 
// Windows の "メモ帳" でこのファイルを編集しないでください !
// 問題なく使えるテキストエディタ
// (http://wpdocs.sourceforge.jp/Codex:%E8%AB%87%E8%A9%B1%E5%AE%A4 参照)
// を使用し、必ず UTF-8 の BOM なし (UTF-8N) で保存してください。

// ** MySQL 設定 - この情報はホスティング先から入手してください。 ** //
/** WordPress のためのデータベース名 */
define('DB_NAME', 'suiranpress');

/** MySQL データベースのユーザー名 */
define('DB_USER', 'root');

/** MySQL データベースのパスワード */
define('DB_PASSWORD', 'i897-2222.su1ran');

/** MySQL のホスト名 */
define('DB_HOST', 'localhost');

/** データベースのテーブルを作成する際のデータベースの文字セット */
define('DB_CHARSET', 'utf8mb4');

/** データベースの照合順序 (ほとんどの場合変更する必要はありません) */
define('DB_COLLATE', '');

/**#@+
 * 認証用ユニークキー
 *
 * それぞれを異なるユニーク (一意) な文字列に変更してください。
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org の秘密鍵サービス} で自動生成することもできます。
 * 後でいつでも変更して、既存のすべての cookie を無効にできます。これにより、すべてのユーザーを強制的に再ログインさせることになります。
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '=m?$^CT`((ESf#1pB! %SzXRSd=*)u0R@rLo>~%W0.i,H8fw{YsJD6:Q.OS_-[~f');
define('SECURE_AUTH_KEY',  'Jq>HwEKI}X_E7AQ1k|;u7:cW!DoTgdQIr;v~JU,YXQ{eYzG<f3:w8=HorQ[S_gT^');
define('LOGGED_IN_KEY',    'xt+~:6K6w5aGr zQqe]W#EW:1M1(_@p|ODg%h:qzPo2fah|+U3.]_zLclY1.e0#0');
define('NONCE_KEY',        '0xU[2HJCMmHsa1?2s*N+_%.U$(k1_U8#*7Qw jM%#.I*it3>g;;AzdL8DA)@W%YL');
define('AUTH_SALT',        'NN}5MALxDZuSr/QGZ,J|6HOp%D<wpdVhlZN(jFQFLh.*$9 go_A9 >W-5>t;Iqji');
define('SECURE_AUTH_SALT', 'R%mA&M.9_N{,(NLU5-`[[V*OxD&2Dt_LQ+&FaERRsq-K$Z{8@o]qCkKJ@RLV4:qq');
define('LOGGED_IN_SALT',   'Uy)1=Ivk6yTT*Sa_>;m0^g(7yc^q0)STNXW4e!T53hA]pdFO0OZOO7+a2N8~{FN&');
define('NONCE_SALT',       '8*7x0g7Tf@:AjYqB+|@%kET231[ tw#<=GXXiZ<a^OIuE{#@$.A<rvdlv]fB?8AQ');

/**#@-*/

/**
 * WordPress データベーステーブルの接頭辞
 *
 * それぞれにユニーク (一意) な接頭辞を与えることで一つのデータベースに複数の WordPress を
 * インストールすることができます。半角英数字と下線のみを使用してください。
 */
$table_prefix  = 'wp_';

/**
 * 開発者へ: WordPress デバッグモード
 *
 * この値を true にすると、開発中に注意 (notice) を表示します。
 * テーマおよびプラグインの開発者には、その開発環境においてこの WP_DEBUG を使用することを強く推奨します。
 *
 * その他のデバッグに利用できる定数については Codex をご覧ください。
 *
 * @link http://wpdocs.osdn.jp/WordPress%E3%81%A7%E3%81%AE%E3%83%87%E3%83%90%E3%83%83%E3%82%B0
 */
define('WP_DEBUG', false);

/* 編集が必要なのはここまでです ! WordPress でブログをお楽しみください。 */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
