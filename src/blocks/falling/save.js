
import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	return (
		<p {...useBlockProps.save()}>
			{'Back Animation – hello from the saved content!'}
		</p>
	);
}
