
import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const {
		bg_Color,
		bg_Gradient,
		number_value
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



	return (
		<div {...blockProps}>

			<div id="particlesId"
				data-particle_num={number_value}
				style={{ background: bgColor }} />
		</div>
	);
}
