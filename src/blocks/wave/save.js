
import { useBlockProps } from '@wordpress/block-editor';


export default function save({ attributes }) {
	return (
		<div {...useBlockProps.save()}>
			<canvas id="waveCanvas"></canvas>
		</div>
	);
}
