<?php

/**
 * Plugin Name:       Back Anime Block
 * Description:       This is a plugin that collects blocks that provide the ability to place animations in the background.
 * Requires at least: 6.4
 * Requires PHP:      8.2.10
 * Version:           0.1.0
 * Author:            Web Creator ITmaroon
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       back-anime-block
 * Domain Path:       /languages
 * @package           create-block
 */

//PHPファイルに対する直接アクセスを禁止
if (!defined('ABSPATH')) exit;

// プラグイン情報取得に必要なファイルを読み込む
if (!function_exists('get_plugin_data')) {
	require_once(ABSPATH . 'wp-admin/includes/plugin.php');
}

require_once __DIR__ . '/vendor/itmar/loader-package/src/register_autoloader.php';

$block_entry = new \Itmar\BlockClassPackage\ItmarEntryClass();

//ブロックの初期登録
add_action('init', function () use ($block_entry) {
	$plugin_data = get_plugin_data(__FILE__);
	$block_entry->block_init($plugin_data['TextDomain'], __FILE__);
}, 1); //このプラグインは優先実行



//プラグインの読み込み
function itmar_back_anime_block_add_plugin()
{
	// $dir = dirname(__FILE__);
	// //JavaScript ファイルの読み込み（エンキュー）
	// wp_enqueue_script(
	// 	'particles',
	// 	'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js',
	// 	array(),
	// 	'2.0.0',
	// 	true
	// );

	//フロントエンド用のスクリプト
	// if (! is_admin()) { //管理画面の時は読み込まない
	// 	$script_path = plugin_dir_path(__FILE__) . 'assets/front_rendering.js';
	// 	wp_enqueue_script(
	// 		'itmar-back_anime-script',
	// 		plugins_url('/assets/front_rendering.js?', __FILE__),
	// 		array('jquery', 'wp-i18n'),
	// 		filemtime($script_path),
	// 		true
	// 	);
	// }

	//urlパスの引き渡し
	$plugin_url = plugins_url("", __FILE__);
	wp_localize_script('itmar-script-handle', 'back_anime', array(
		'plugin_url' => $plugin_url
	));
}
add_action('enqueue_block_assets', 'itmar_back_anime_block_add_plugin');
