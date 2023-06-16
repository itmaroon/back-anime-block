
import { __ } from '@wordpress/i18n';
import './editor.scss';

import { useDeepCompareEffect } from '../../../CustomFooks';

import {
	PanelBody,
	PanelRow,
	RangeControl,
	ToggleControl,
} from '@wordpress/components';
import {
	useBlockProps,
	InspectorControls,
	__experimentalPanelColorGradientSettings as PanelColorGradientSettings,
} from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
	const {
		first_Color,
		second_Color,
		is_mulutiwave,
		wave_height,
		first_wave_size,
		second_wave_size

	} = attributes;



	useDeepCompareEffect(() => {
		const iframe = document.getElementsByName('editor-canvas')[0]; // iframeの検出
		//iframeの有無で操作するドキュメント要素を峻別
		const target_doc = iframe ? (iframe.contentDocument || iframe.contentWindow.document) : document
		const canvas = target_doc.getElementById("waveCanvas");
		const colorList = [first_Color, second_Color];//重ねる波の色設定
		const unit = 100;
		let info = {};
		canvas.width = document.documentElement.clientWidth; //Canvasのwidthをウィンドウの幅に合わせる
		canvas.height = wave_height;//波の高さ
		canvas.contextCache = canvas.getContext("2d");

		/**
	 * Function to draw sine
	 * 
	 * The sine curve is drawn in 10px segments starting at the origin. 
	 * drawSine(時間, 波の幅のzoom, 波の開始位置の遅れ)
	 */
		const drawSine = (canvas, t, zoom, delay) => {
			var xAxis = Math.floor(canvas.height / 2);
			var yAxis = 0;
			var context = canvas.contextCache;
			// Set the initial x and y, starting at 0,0 and translating to the origin on
			// the canvas.
			var x = t; //時間を横の位置とする
			var y = Math.sin(x) / zoom;
			context.moveTo(yAxis, unit * y + xAxis); //スタート位置にパスを置く

			// Loop to draw segments (横幅の分、波を描画)
			for (let i = yAxis; i <= canvas.width + 10; i += 10) {
				x = t + (-yAxis + i) / unit / zoom;
				y = Math.sin(x - delay) / 3;
				context.lineTo(i, unit * y + xAxis);
			}
		}

		/**
		* 波を描画
		* drawWave(色, 不透明度, 波の幅のzoom, 波の開始位置の遅れ)
		*/
		const drawWave = (canvas, color, alpha, zoom, delay) => {
			var context = canvas.contextCache;
			context.fillStyle = color;//塗りの色
			context.globalAlpha = alpha;
			context.beginPath(); //パスの開始
			drawSine(canvas, info.t / 0.5, zoom, delay);
			context.lineTo(canvas.width + 10, canvas.height); //パスをCanvasの右下へ
			context.lineTo(0, canvas.height); //パスをCanvasの左下へ
			context.closePath() //パスを閉じる
			context.fill(); //波を塗りつぶす
		}

		/**
		 * Draw animation function.
		 * 
		 * This function draws one frame of the animation, waits 20ms, and then calls
		 * itself again.
		 */
		const draw = (canvas, color) => {
			// 対象のcanvasのコンテキストを取得
			var context = canvas.contextCache;
			// キャンバスの描画をクリア
			context.clearRect(0, 0, canvas.width, canvas.height);

			//波の重なりを描画 drawWave(canvas, color[数字], 透過, 波の幅のzoom,波の開始位置の遅れ )
			drawWave(canvas, color[0], 0.5, first_wave_size, 0);//0.5⇒透過具合50%、3⇒数字が大きいほど波がなだらか
			if (is_mulutiwave) {
				drawWave(canvas, color[1], 0.4, second_wave_size, 250);
			}

			//drawWave(canvas, color[0], 0.2, 1.6, 100);
		}

		const itmar_animeblock_wave_update = () => {
			draw(canvas, colorList);
			// 共通の描画情報の更新
			info.seconds = info.seconds + .014;
			info.t = info.seconds * Math.PI;
			// 自身の再起呼び出し
			setTimeout(itmar_animeblock_wave_update, 35);
		}

		info.seconds = 0;
		info.t = 0;
		itmar_animeblock_wave_update();

		return () => {
			// アニメーション停止
			info.seconds = 0;
			info.t = 0;
			clearTimeout(itmar_animeblock_wave_update);
		};

	}, [attributes]);

	return (
		<>
			<InspectorControls group="settings">
				<PanelBody title="全体設定" initialOpen={true} className="back_design_ctrl">
					<PanelRow>
						<ToggleControl
							label='波を２重にする'
							checked={is_mulutiwave}
							onChange={(val) => setAttributes({ is_mulutiwave: val })}
						/>
					</PanelRow>
					<PanelRow className='logoSizeCtrl'>
						<RangeControl
							value={wave_height}
							label="波の高さ"
							max={500}
							min={50}
							onChange={(val) => setAttributes({ wave_height: val })}
							separatorType="none"
							step={10}
							withInputField={false}
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody title="波１の設定" initialOpen={true} className="back_design_ctrl">
					<PanelColorGradientSettings
						title={__("Background Color Setting")}
						settings={[
							{
								colorValue: first_Color,
								label: __("Choice color"),
								onColorChange: (newValue) => {
									setAttributes({ first_Color: newValue === undefined ? '' : newValue });
								}
							}
						]}
					/>
					<PanelRow className='logoSizeCtrl'>
						<RangeControl
							value={first_wave_size}
							label="波の幅"
							max={5}
							min={0.5}
							onChange={(val) => setAttributes({ first_wave_size: val })}
							separatorType="none"
							step={0.5}
							withInputField={false}
						/>
					</PanelRow>
				</PanelBody>
				{is_mulutiwave &&
					<PanelBody title="波２の設定" initialOpen={true} className="back_design_ctrl">
						<PanelColorGradientSettings
							title={__("Background Color Setting")}
							settings={[
								{
									colorValue: second_Color,
									label: __("Choice color"),
									onColorChange: (newValue) => {
										setAttributes({ second_Color: newValue === undefined ? '' : newValue });
									}
								}
							]}
						/>
						<PanelRow className='logoSizeCtrl'>
							<RangeControl
								value={second_wave_size}
								label="波の幅"
								max={5}
								min={0.5}
								onChange={(val) => setAttributes({ second_wave_size: val })}
								separatorType="none"
								step={0.5}
								withInputField={false}
							/>
						</PanelRow>
					</PanelBody>
				}
			</InspectorControls>
			<div {...useBlockProps()}>
				<canvas id="waveCanvas"></canvas>
			</div>
		</>

	);
}
