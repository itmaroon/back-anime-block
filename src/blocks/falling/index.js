import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";
import "./style.scss";
import { ReactComponent as Falling } from "./falling.svg";

/**
 * Internal dependencies
 */
import Edit from "./edit";
import save from "./save";
import metadata from "./block.json";

registerBlockType(metadata.name, {
	styles: [
		{
			name: "default",
			label: __("Default", "back-anime-block"),
			isDefault: true,
		},
		{
			name: "degital",
			label: __("Geometric Patterns", "back-anime-block"),
		},
		{
			name: "paper",
			label: __("Confetti", "back-anime-block"),
		},
		{
			name: "bubbly",
			label: __("Bubble", "back-anime-block"),
		},
	],

	description: __(
		"Particle animation has been made blocky.",
		"back-anime-block",
	),
	icon: <Falling />,
	edit: Edit,
	save,
});
