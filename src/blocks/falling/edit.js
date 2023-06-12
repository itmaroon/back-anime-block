import { __ } from '@wordpress/i18n';
import './editor.scss';
import { useEffect } from '@wordpress/element';

import {
	PanelBody,
	PanelRow,
	TextControl,
	Button,
	RangeControl,
	Toolbar,
	RadioControl
} from '@wordpress/components';
import {
	useBlockProps,
	InspectorControls,
	BlockControls,
	__experimentalPanelColorGradientSettings as PanelColorGradientSettings,
} from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
	const {
		bg_Color,
		bg_Gradient,
		number_value
	} = attributes;

	//単色かグラデーションかの選択
	const bgColor = bg_Color || bg_Gradient;
	//ブロックのスタイル設定
	const blockProps = useBlockProps({
		style: {
			position: 'absolute',
			width: '100%',
			height: '100%',
			top: 0,
			left: 0
		}
	});

	const options = {
		"particles": {
			"number": {
				"value": `${number_value}`,/*この数値を変更すると雪の数が増減できる*/
				"density": {
					"enable": true,
					"value_area": 800
				}
			},
			"color": {
				"value": "#ffffff"
			},
			"shape": {
				"type": "image",/*形状は画像を指定*/
				"stroke": {
					"width": 3,
					"color": "#fff"
				},
				"image": {
					"src": `${back_anime.plugin_url}/assets/img/snow.png`,/*画像を指定*/
					"width": 120,
					"height": 120
				}
			},
			"opacity": {
				"value": 0.7,
				"random": false,
				"anim": {
					"enable": false,
					"speed": 1,
					"opacity_min": 0.1,
					"sync": false
				}
			},
			"size": {
				"value": 5,
				"random": true,
				"anim": {
					"enable": false,
					"speed": 20,
					"size_min": 0.1,
					"sync": false
				}
			},
			"line_linked": {
				"enable": false,
			},
			"move": {
				"enable": true,
				"speed": 3,/*この数値を小さくするとゆっくりな動きになる*/
				"direction": "bottom",/*下に向かって落ちる*/
				"random": true,/*動きはランダム*/
				"straight": false,/*動きをとどめない*/
				"out_mode": "out",/*画面の外に出るように描写*/
				"bounce": false,/*跳ね返りなし*/
				"attract": {
					"enable": true,
					"rotateX": 300,
					"rotateY": 1200
				}
			}
		},
		"interactivity": {
			"detect_on": "canvas",
			"events": {
				"onhover": {
					"enable": false,
				},
				"onclick": {
					"enable": false,
				},
				"resize": true
			}
		},
		"retina_detect": true
	}

	useEffect(() => {
		const iframe = document.getElementsByName('editor-canvas')[0]; // name属性を利用
		//iframeがあればそちらにスクリプトをインジェクション
		if (iframe) {
			const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
			// Create a new script element.
			const script = iframeDocument.createElement('script');

			script.innerHTML = `
				var particlesScript = document.createElement('script');
				particlesScript.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
				particlesScript.onload = function() {
						particlesJS('particlesId', ${JSON.stringify(options)});
				};
				document.body.appendChild(particlesScript);
			`;
			//idの割り当て
			script.id = 'itmar-particles-script';
			// iframe内に書き込み
			iframeDocument.body.appendChild(script);
		} else {
			particlesJS('particlesId', options);
		}
		// クリーンアップ関数
		return () => {
			const existingScript = iframeDocument.getElementById('itmar-particles-script');
			// 既存のscriptがある場合、それを削除する
			if (existingScript) {
				existingScript.remove();
			}
		};
	}, [number_value]);

	return (
		<>
			<InspectorControls group="settings">
				<PanelBody title="背景設定" initialOpen={true} className="back_design_ctrl">

					<PanelColorGradientSettings
						title={__("Background Color Setting")}
						settings={[
							{
								colorValue: bg_Color,
								gradientValue: bg_Gradient,

								label: __("Choice color or gradient"),
								onColorChange: (newValue) => {
									setAttributes({ bg_Color: newValue === undefined ? '' : newValue });
								},
								onGradientChange: (newValue) => {
									setAttributes({ bg_Gradient: newValue });
								},
							}
						]}
					/>
				</PanelBody>
				<PanelBody title="パーティクル設定" initialOpen={true} className="particle_ctrl">
					<PanelRow className='logoSizeCtrl'>
						<RangeControl
							value={number_value}
							label="パーティクルの数"
							max={500}
							min={50}
							onChange={(val) => setAttributes({ number_value: val })}
							separatorType="none"
							step={10}
							withInputField={false}
						/>

					</PanelRow>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<div id="particlesId" style={{ background: bgColor }} />
			</div>
		</>

	);
}
