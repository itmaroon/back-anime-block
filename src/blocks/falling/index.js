
import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import { ReactComponent as Falling } from './falling.svg';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';


registerBlockType(metadata.name, {
	icon: <Falling />,
	edit: Edit,
	save,
});
