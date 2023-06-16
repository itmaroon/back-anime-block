
import { useBlockProps } from '@wordpress/block-editor';


export default function save({ attributes }) {
	const str_option = JSON.stringify(attributes);

	return (
		<div {...useBlockProps.save()}>
			<canvas id="waveCanvas" data-wave_option={str_option}></canvas>
		</div>
	);
}
