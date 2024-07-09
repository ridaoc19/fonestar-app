import type { Meta, StoryObj } from '@storybook/react';

import Svg from './Svg';
import { SvgType } from './svgType';
import _color from '../../../styles/index/global/_color';

const meta: Meta<typeof Svg> = {
	title: 'components/common/Icons',
	component: Svg,
	tags: ['autodocs'],
	argTypes: {
		type: {
			description: 'El tipo de icono',
			control: {
				type: 'select',
			},
			options: Object.values(SvgType),
		},
		height: {
			description: 'selecciona el alto',
			control: { type: 'number' },
		},
		width: {
			description: 'selecciona el ancho',
			control: { type: 'number' },
		},
		color: {
			description: 'Selecciona el color deseado',
			control: {
				type: 'color',
				presetColors: Object.values(_color),
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Svgs: Story = {
	args: {
		type: SvgType.Logo,
		color: _color['--base-icon'],
		width: 24,
		height: 24,
	},
};
