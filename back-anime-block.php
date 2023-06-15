<?php
/**
 * Plugin Name:       Back Animation
 * Plugin URI:        https://itmaroon.net
 * Description:       背景のアニメーションをブロックにしたものを集めました
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            WebクリエイターITmaroon
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       back-anime-block
 *
 * @package           itmar
 */


function itmar_back_anime_block_block_init() {
	foreach (glob(plugin_dir_path(__FILE__) . 'build/blocks/*') as $block) {
		// Static block
		register_block_type($block);
	}
}
add_action( 'init', 'itmar_back_anime_block_block_init' );

//プラグインの読み込み
function itmar_back_anime_block_add_plugin() {
  $dir = dirname( __FILE__ );
  //JavaScript ファイルの読み込み（エンキュー）
	wp_enqueue_script( 
		'particles','https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js', 
		array(), 
		'2.0.0',
		true
	);

	//フロントエンド用のスクリプト
	if ( ! is_admin() ) {//管理画面の時は読み込まない
		wp_enqueue_script( 
			'itmar-back_anime-script', 
			plugins_url( '/assets/front_rendering.js?'.date('YmdHis'), __FILE__ ), 
			array('jquery'), 
			'1.0.0',
			true
		);
	}
	

	
	//urlパスの引き渡し
  $plugin_url = plugins_url("",__FILE__);
	wp_localize_script( 'particles', 'back_anime', array(
			'plugin_url' => $plugin_url
	));
	
}
add_action('enqueue_block_assets', 'itmar_back_anime_block_add_plugin');