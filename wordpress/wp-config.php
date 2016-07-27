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
define('WP_CACHE', true); //Added by WP-Cache Manager
define( 'WPCACHEHOME', '/home/vol9_5/bikkuri.link/bikk_17904701/htdocs/suiranweb/wordpress/wp-content/plugins/wp-super-cache/' ); //Added by WP-Cache Manager
define('DB_NAME', 'bikk_17904701_suiranpress');


/** MySQL データベースのユーザー名 */
define('DB_USER', 'bikk_17904701');


/** MySQL データベースのパスワード */
define('DB_PASSWORD', 's1mutrans');


/** MySQL のホスト名 */
define('DB_HOST', 'sql306.bikkuri.link');


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
define('AUTH_KEY',         'J*Bs8S#y!3[{8vtd|d_N?.n(0Kamr@XIN45q|yVJ(c4}prGb=#bp^yaMiC4Ij;$L');

define('SECURE_AUTH_KEY',  'eYwHlHy!aCNh=dS/qh10Kc4aNYw%9I5W]3LObG_/mM6uu.vxNV;igX!Gk:m_QF-2');

define('LOGGED_IN_KEY',    '1cv=5EK!k?7WDW2#iv!*=GR2}3ch=$T%YOM+A.oIZRA7,j:.Mg!r0x 3}6A-s]Os');

define('NONCE_KEY',        'ikz/%Z&pb[%{{QJi/QTG3?[u+CMd22>6BG%>Z`;w}%8,31(8&&3>?fW}>J`ZEjfv');

define('AUTH_SALT',        '%slH3+}czeqSgO5q-R%wn;C@eLuO9hqi}[oY!9`3OTQEQ%hH%$*7zco)C7-GizcI');

define('SECURE_AUTH_SALT', 'NG?=9i7/tz+8uF2s9&UY;$7eM >=sFQb8((0Ho.E{`QPECe.21{`mv K_b>^{kDv');

define('LOGGED_IN_SALT',   '%cVhA#>;<kz5V]y#>fq:-nLR54qj>b/3}_YP6=IxdGfJE(wY91??p19e6Qqcs4Si');

define('NONCE_SALT',       'Qo1EBNk&l@BU.$2;l!w xrMF:%M>c+.m|*D`k~W^w`  8=1IR{>|{u5gpL,s:*Z[');


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
define('WP_DEBUG', true);

/* 編集が必要なのはここまでです ! WordPress でブログをお楽しみください。 */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
