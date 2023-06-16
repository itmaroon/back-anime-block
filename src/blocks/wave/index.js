
import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import { ReactComponent as Wave } from './wave.svg';

import Edit from './edit';
import save from './save';
import metadata from './block.json';


registerBlockType(metadata.name, {
	icon: <Wave />,
	edit: Edit,
	save,
});
