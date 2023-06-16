
import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
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
	const blockProps = useBlockProps.save({
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
	const str_option = JSON.stringify(select_option);

	return (
		<div {...blockProps}>

			<div id="particlesId"
				data-particle_option={str_option}
				style={{ background: bgColor }} />
		</div>
	);
}
