import { __ } from '@wordpress/i18n';
import './editor.scss';
import ImageList from '../../../ImageList';
import MultiSelect from '../../../MultiSelect';
import { useDeepCompareEffect } from '../../../CustomFooks';

import {
	PanelBody,
	PanelRow,
	TextControl,
	Button,
	RangeControl,
	Toolbar,
	RadioControl,
	CheckboxControl
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
		number_value,
		particleImage,
		particleSize,
		poliline_num,
		linkLine_color,
		particleSpeed,
		particleDirection,
		poliline_color,
		polilineSpeed,
		paperNum,
		paperSpeed,
		paperDirection,
		paperDensity,
		twincleNum,
		twincleDensity,
		twincle_color,
		shape_color,
		shapeNum,
		shapeDensity,
		shape_type,
		shapeSize,
		shapeSpeed,
		className
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
	//パーティクルのオプション
	const particle_options = {

		'is-style-default': {
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
						"src": `${back_anime.plugin_url}/assets/img/${particleImage}`,/*画像を指定*/
						"width": 120,
						"height": 120
					},

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
					"value": `${particleSize}`,
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
					"speed": `${particleSpeed}`,/*この数値を小さくするとゆっくりな動きになる*/
					"direction": `${particleDirection}`,/*下に向かって落ちる*/
					"random": true,/*動きはランダム*/
					"straight": false,/*動きをとどめない*/
					"out_mode": "out",/*画面の外に出るように描写*/
					"bounce": false,/*跳ね返りなし*/
					"attract": {
						"enable": true,
						"rotateX": 300,
						"rotateY": 1200
					}
				},

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
		},
		'is-style-degital': {
			"particles": {
				"number": {
					"value": `${poliline_num}`,/*この数値を変更すると幾何学模様の数が増減できる*/
					"density": {
						"enable": true,
						"value_area": 800
					}
				},
				"color": {
					"value": `${poliline_color}`/*色*/
				},
				"shape": {
					"type": "polygon",/*形状はpolygonを指定*/
					"stroke": {
						"width": 1,
						"color": `${poliline_color}`,
					},
					"polygon": {
						"nb_sides": 3//多角形の角の数
					},
					"image": {
						"width": 190,
						"height": 100
					}
				},
				"opacity": {
					"value": 0.664994832269074,
					"random": false,
					"anim": {
						"enable": true,
						"speed": 2.2722661797524872,
						"opacity_min": 0.08115236356258881,
						"sync": false
					}
				},
				"size": {
					"value": 3,
					"random": true,
					"anim": {
						"enable": false,
						"speed": 40,
						"size_min": 0.1,
						"sync": false
					}
				},
				"line_linked": {
					"enable": true,
					"distance": 150,
					"color": `${linkLine_color}`,
					"opacity": 0.6,
					"width": 1
				},
				"move": {
					"enable": true,
					"speed": `${polilineSpeed}`,/*この数値を小さくするとゆっくりな動きになる*/
					"direction": "none",/*方向指定なし*/
					"random": false,/*動きはランダムにしない*/
					"straight": false,/*動きをとどめない*/
					"out_mode": "out",/*画面の外に出るように描写*/
					"bounce": false,/*跳ね返りなし*/
					"attract": {
						"enable": false,
						"rotateX": 600,
						"rotateY": 961.4383117143238
					}
				}
			},
			"interactivity": {
				"detect_on": "canvas",
				"events": {
					"onhover": {
						"enable": false,
						"mode": "repulse"
					},
					"onclick": {
						"enable": false
					},
					"resize": true
				}
			},
			"retina_detect": true
		},
		'is-style-paper': {
			"particles": {
				"number": {
					"value": paperNum,//紙吹雪の数
					"density": {
						"enable": true,
						"value_area": paperDensity
					}
				},
				"color": {
					"value": [
						"#EA5532",
						"#F6AD3C",
						"#FFF33F",
						"#00A95F",
						"#00ADA9",
						"#00AFEC",
						"#4D4398",
						"#E85298"
					]//紙吹雪の色の種類
				},
				"shape": {
					"type": "polygon",//形状はPolygon,つまり多角形
					"stroke": {
						"width": 0,
					},
					"polygon": {
						"nb_sides": 4//多角形の角の数
					}
				},
				"opacity": {
					"value": 1,
					"random": false,
					"anim": {
						"enable": true,
						"speed": 20,
						"opacity_min": 0,
						"sync": false
					}
				},
				"size": {
					"value": 5,
					"random": true,//サイズをランダムにする
					"anim": {
						"enable": true,
						"speed": 1,
						"size_min": 1,
						"sync": false
					}
				},
				"line_linked": {
					"enable": false,
				},
				"move": {
					"enable": true,
					"speed": `${paperSpeed}`,//小さくするとゆっくり、大きくすると速くなる
					"direction": `${paperDirection}`,//落ちる向き
					"random": false,//動きをランダムにするか
					"straight": false,//まっすぐ落ちるかどうか
					"out_mode": "out",//画面の外に出るか
					"bounce": false,//跳ね返るかどうか
					"attract": {
						"enable": false,
						"rotateX": 600,
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
				},
			},
			"retina_detect": true
		},
		'is-style-twincle': {
			"particles": {
				"number": {
					"value": twincleNum,//この数値を変更すると星の数が増減できる
					"density": {
						"enable": true,
						"value_area": twincleDensity
					}
				},
				"color": {
					"value": twincle_color
				},
				"shape": {
					"type": "circle",//形状はcircleを指定
					"stroke": {
						"width": 0
					},
				},
				"opacity": {
					"value": 1,//シェイプの透明度
					"random": true,//シェイプの透明度をランダムにする
					"anim": {
						"enable": true,//シェイプの透明度をアニメーションさせる
						"speed": 3,//シェイプの透明度をアニメーションさせる
						"opacity_min": 0,//透明度の最小値０
						"sync": false//全てを同時にアニメーションさせない
					}
				},
				"size": {
					"value": 2,
					"random": true,
					"anim": {
						"enable": false,
						"speed": 4,
						"size_min": 0.3,
						"sync": false
					}
				},
				"line_linked": {
					"enable": false,
				},
				"move": {
					"enable": true,
					"speed": 20,//この数値を小さくするとゆっくりな動きになる
					"direction": "none",//方向指定なし
					"random": true,//動きはランダムに
					"straight": true,//動きをとどめる
					"out_mode": "out",
					"bounce": false,
					"attract": {
						"enable": false,
						"rotateX": 600,
						"rotateY": 600
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
		},
		'is-style-bubbly': {
			"particles": {
				//シェイプ数
				"number": {
					//要素内に表示するシェイプの数
					"value": shapeNum,
					"density": {
						//シェイプ表示間隔設定
						"enable": true,
						//シェイプ表示間隔指定
						"value_area": shapeDensity
					}
				},
				//シェイプ色
				"color": {
					"value": shape_color
				},

				//シェイプの設定
				"shape": {
					//シェイプ形
					"type": shape_type, //circle, edge, triangle, polygon, star, image 複数指定["circle", "triangle", "image"]

					//シェイプボーダー設定
					"stroke": {
						//ボーダー幅
						"width": 0,
						//ボーダー色
						"color": "#000000"
					},

					//シェイプの形でpolygonを指定した場合
					"polygon": {
						//ポリゴン角数指定
						"nb_sides": 5
					},
				},

				//シェイプ透過率指定
				"opacity": {
					//透過率指定
					"value": 0.5,
					//ランダム設定
					"random": true, //true:有効, false:無効

					//透過アニメーション設定
					"anim": {
						//アニメーション設定
						"enable": true, //true:有効, false:無効
						//アニメーション速度
						"speed": 1,
						//アニメーション最小透過率
						"opacity_min": 0.1,
						//アニメーション同期
						"sync": false //true:有効, false:無効
					}
				},

				//シェイプサイズ
				"size": {
					//シェイプサイズ指定
					"value": shapeSize,
					//ランダムサイズ
					"random": true, //true:有効, false:無効
					//サイズアニメーション設定
					"anim": {
						//アニメーション設定
						"enable": false, //true:有効, false:無効
						//アニメーション速度
						"speed": 10,
						//アニメーション最小サイズ,
						"size_min": 1,
						//アニメーション同期設定
						"sync": false //true:有効, false:無効
					}
				},

				//シェイプを線で繋ぐか
				"line_linked": {
					//線の設定
					"enable": false, //true:有効, false:無効
					//線の間隔
					"distance": 150,
					//線の色
					"color": "#ffffff",
					//線の透過率
					"opacity": 0.4,
					//線の幅
					"width": 1
				},

				//シェイプの動きの設定
				"move": {
					//動きを制御するか
					"enable": true, //true:有効, false:無効
					//動く速度
					"speed": shapeSpeed,
					//動く方向
					"direction": "none", //none, top, top-right, right, bottom-right, bottom, bottom-left, left, top-left
					//ランダム設定
					"random": false, //true:有効, false:無効
					//静止状態にする
					"straight": false, //true:有効, false:無効
					//シェイプの動き
					"out_mode": "out", //ボックス内で動かす bounce ボックス外に逃がす out
					"attract": {
						"enable": true,
						"rotateX": 1000,
						"rotateY": 1000
					}
				}
			},

			"interactivity": {
				"detect_on": "canvas",

				//マウスイベント設定
				"events": {
					//マウスオーバー時の処理
					"onhover": {
						"enable": false, //true:有効, false:無効
						"mode": "bubble" //grad:付近のシェイプと線を繋ぐ, bubble:拡大, repulse:拒絶
					},

					//クリック時の処理処理
					"onclick": {
						//クリック時の処理
						"enable": true, //true:有効, false:無効
						//クリック時の処理
						"mode": "push" //push:追加, remove:削除, bubble:拡大, repulse:拒絶
					},
					"resize": true
				},

				//以下でマウスイベント発生時の詳細値を設定
				"modes": {
					"grab": {
						"distance": 300,
						"line_linked": {
							"opacity": 1
						}
					},
					"bubble": {
						"distance": 100,
						"size": 7.5,
						"duration": 2,
						"opacity": 8,
						"speed": 3
					},
					"repulse": {
						"distance": 1
					},
					"push": {
						"particles_nb": 4
					},
					"remove": {
						"particles_nb": 2
					}
				}
			},
			//Retina Display対応
			"retina_detect": true, //true:有効, false:無効
		}
	}

	const select_option = particle_options[className] || particle_options['is-style-default'];

	//パーティクルのイメージ画像リストの取得
	const imageList = ImageList();

	useDeepCompareEffect(() => {
		const iframe = document.getElementsByName('editor-canvas')[0]; // name属性を利用
		//iframeがあればそちらにスクリプトをインジェクション（サイトエディタ対応）
		if (iframe) {
			const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
			// Create a new script element.
			const script = iframeDocument.createElement('script');

			script.innerHTML = `
				var particlesScript = document.createElement('script');
				particlesScript.id = 'itmar-particles-library';
				particlesScript.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
				particlesScript.onload = function() {
						particlesJS('particlesId', ${JSON.stringify(select_option)});
				};
				document.body.appendChild(particlesScript);
			`;
			//idの割り当て
			script.id = 'itmar-particles-script';
			// iframe内に書き込み
			iframeDocument.body.appendChild(script);
		} else {
			//ブロックエディタ対応
			particlesJS('particlesId', select_option);
		}
		// クリーンアップ関数
		return () => {
			const iframe = document.getElementsByName('editor-canvas')[0]; // name属性を利用
			//iframeがあればクリーンアップを実行
			if (iframe) {
				const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
				// 既存のscriptがある場合、それを削除する
				const existingScript = iframeDocument.getElementById('itmar-particles-script');
				if (existingScript) {
					existingScript.remove();
				}
				const existingLibraryScript = iframeDocument.getElementById('itmar-particles-library');
				if (existingLibraryScript) {
					existingLibraryScript.remove();
				}
			}
		};
	}, [attributes]);

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
								colors: [
									{ name: 'red', color: '#f00' },
									{ name: 'white', color: '#fff' },
									{ name: 'blue', color: '#00f' },
									{ name: 'black', color: '#000' },
									{ name: 'transparent', color: '#00000000' },
								],
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
				{(className === 'is-style-default' || className === undefined) &&
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
						<PanelRow className='logoSizeCtrl'>
							<RangeControl
								value={particleSize}
								label="パーティクルの大きさ"
								max={20}
								min={3}
								onChange={(val) => setAttributes({ particleSize: val })}
								separatorType="none"
								step={1}
								withInputField={false}
							/>

						</PanelRow>
						<PanelRow className='logoSizeCtrl'>
							<RangeControl
								value={particleSpeed}
								label="落ちる速度"
								max={10}
								min={1}
								onChange={(val) => setAttributes({ particleSpeed: val })}
								separatorType="none"
								step={1}
								withInputField={false}
							/>

						</PanelRow>
						<PanelRow>
							<div className="particle_direction">
								<RadioControl
									label="落ちる方向"
									selected={particleDirection}
									options={[
										{ value: 'bottom' },
										{ value: 'top' },
										{ value: 'right' },
										{ value: 'left' },
										{ value: 'bottom-right' },
										{ value: 'bottom-left' },
										{ value: 'top-left' },
										{ value: 'top-right' },
										{ value: 'none' },
									]}
									onChange={(changeOption) => { setAttributes({ particleDirection: changeOption }); }
									}
								/>
							</div>
						</PanelRow>
						<PanelRow>
							<div className="particle_image">
								<RadioControl
									label="パーティクルイメージの選択"
									selected={particleImage}
									options={imageList}
									onChange={(changeOption) => { setAttributes({ particleImage: changeOption }); }
									}
								/>
							</div>
						</PanelRow>

					</PanelBody>
				}
				{className === 'is-style-degital' &&
					<PanelBody title="ポリライン設定" initialOpen={true} className="particle_ctrl">
						<PanelRow className='logoSizeCtrl'>
							<RangeControl
								value={poliline_num}
								label="ポリラインの数"
								max={100}
								min={20}
								onChange={(val) => setAttributes({ poliline_num: val })}
								separatorType="none"
								step={10}
								withInputField={false}
							/>

						</PanelRow>
						<PanelColorGradientSettings
							title={__("Color Setting")}
							settings={[
								{
									colorValue: poliline_color,
									label: __("Poliline line Color"),
									onColorChange: (newValue) => setAttributes({ poliline_color: newValue }),
								},
								{
									colorValue: linkLine_color,
									label: __("Link line Color"),
									onColorChange: (newValue) => setAttributes({ linkLine_color: newValue }),
								},
							]}
						/>

						<PanelRow className='logoSizeCtrl'>
							<RangeControl
								value={polilineSpeed}
								label="動く速さ"
								max={20}
								min={3}
								onChange={(val) => setAttributes({ polilineSpeed: val })}
								separatorType="none"
								step={1}
								withInputField={false}
							/>

						</PanelRow>

					</PanelBody>
				}
				{className === 'is-style-paper' &&
					<PanelBody title="紙吹雪設定" initialOpen={true} className="paper_ctrl">
						<PanelRow className='logoSizeCtrl'>
							<RangeControl
								value={paperNum}
								label="紙吹雪の数"
								max={100}
								min={20}
								onChange={(val) => setAttributes({ paperNum: val })}
								separatorType="none"
								step={10}
								withInputField={false}
							/>

						</PanelRow>
						<PanelRow className='logoSizeCtrl'>
							<RangeControl
								value={paperDensity}
								label="紙吹雪の密集度"
								max={500}
								min={50}
								onChange={(val) => setAttributes({ paperDensity: val })}
								separatorType="none"
								step={10}
								withInputField={false}
							/>

						</PanelRow>

						<PanelRow className='logoSizeCtrl'>
							<RangeControl
								value={paperSpeed}
								label="吹雪く速さ"
								max={20}
								min={3}
								onChange={(val) => setAttributes({ paperSpeed: val })}
								separatorType="none"
								step={1}
								withInputField={false}
							/>

						</PanelRow>
						<PanelRow>
							<div className="particle_direction">
								<RadioControl
									label="吹雪く方向"
									selected={paperDirection}
									options={[
										{ value: 'bottom' },
										{ value: 'top' },
										{ value: 'right' },
										{ value: 'left' },
										{ value: 'bottom-right' },
										{ value: 'bottom-left' },
										{ value: 'top-left' },
										{ value: 'top-right' },
									]}
									onChange={(changeOption) => { setAttributes({ paperDirection: changeOption }); }
									}
								/>
							</div>
						</PanelRow>

					</PanelBody>
				}
				{className === 'is-style-twincle' &&
					<PanelBody title="星の輝き設定" initialOpen={true} className="paper_ctrl">
						<PanelRow className='logoSizeCtrl'>
							<RangeControl
								value={twincleNum}
								label="星の数"
								max={6000}
								min={1000}
								onChange={(val) => setAttributes({ twincleNum: val })}
								separatorType="none"
								step={100}
								withInputField={false}
							/>

						</PanelRow>
						<PanelRow className='logoSizeCtrl'>
							<RangeControl
								value={twincleDensity}
								label="星の密集度"
								max={1000}
								min={200}
								onChange={(val) => setAttributes({ twincleDensity: val })}
								separatorType="none"
								step={20}
								withInputField={false}
							/>

						</PanelRow>
						<PanelColorGradientSettings
							title={__("Star Color Setting")}
							settings={[
								{
									colorValue: twincle_color,
									label: __("Choce Color"),
									onColorChange: (newValue) => setAttributes({ twincle_color: newValue }),
								},
							]}
						/>


					</PanelBody>
				}
				{className === 'is-style-bubbly' &&
					<PanelBody title="シェイプ設定" initialOpen={true} className="shape_ctrl">
						<PanelRow className='logoSizeCtrl'>
							<RangeControl
								value={shapeNum}
								label="シェイプの数"
								max={100}
								min={20}
								onChange={(val) => setAttributes({ shapeNum: val })}
								separatorType="none"
								step={10}
								withInputField={false}
							/>

						</PanelRow>
						<PanelRow className='logoSizeCtrl'>
							<RangeControl
								value={shapeDensity}
								label="シェイプの密集度"
								max={2000}
								min={500}
								onChange={(val) => setAttributes({ shapeDensity: val })}
								separatorType="none"
								step={100}
								withInputField={false}
							/>

						</PanelRow>

						<PanelRow className='logoSizeCtrl'>
							<RangeControl
								value={shapeSize}
								label="シェイプの大きさ"
								max={100}
								min={10}
								onChange={(val) => setAttributes({ shapeSize: val })}
								separatorType="none"
								step={10}
								withInputField={false}
							/>

						</PanelRow>

						<PanelRow className='logoSizeCtrl'>
							<RangeControl
								value={shapeSpeed}
								label="動く速さ"
								max={20}
								min={3}
								onChange={(val) => setAttributes({ shapeSpeed: val })}
								separatorType="none"
								step={1}
								withInputField={false}
							/>

						</PanelRow>
						<PanelRow>
							<div className="shapeType-ctrl">
								<label>シェイプに含まれるタイプ</label>
								<MultiSelect
									stockArrayName="shape_type"
									stokArray={shape_type}
									type='checkBox'
									option={['circle', 'edge', 'triangle', 'star']}
									setAttributes={setAttributes}
								/>
							</div>
						</PanelRow>
						<PanelRow>
							<div className="shapeColor-ctrl">
								<label>シェイプに含まれる色</label>
								<MultiSelect
									stockArrayName="shape_color"
									stokArray={shape_color}
									type='colorPicker'
									setAttributes={setAttributes}
								/>
							</div>
						</PanelRow>

					</PanelBody>
				}
			</InspectorControls>

			<div {...blockProps}>
				<div id="particlesId" style={{ background: bgColor }} />
			</div>
		</>

	);
}
