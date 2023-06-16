
import { __ } from '@wordpress/i18n';


import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';


export default function Edit({ attributes, setAttributes }) {
	return (
		<div {...useBlockProps()}>
			<canvas id="waveCanvas"></canvas>
		</div>
	);
}
