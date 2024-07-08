import { Meta, StoryObj } from '@storybook/react';
import { expect, fireEvent, fn, within } from '@storybook/test';
import { SvgType } from '../icons/svgType';
import Input from './Input';

const meta = {
	title: 'components/common/Input',
	component: Input,
	tags: ['autodocs'],
	argTypes: {
		name: {
			description: 'Nombre del campo de entrada.',
			control: { type: 'text' },
		},
		placeholder: {
			description: 'Texto de marcador de posición para el campo de entrada.',
			control: { type: 'text' },
		},
		disabled: {
			description: 'Deshabilita el campo de entrada si está establecido en `true`.',
			control: { type: 'boolean' },
		},
		svgLeft: {
			description: 'Tipo de icono SVG que se mostrará a la izquierda del campo de entrada.',
			control: { type: 'select' },
			options: Object.values(SvgType),
		},
		svgRight: {
			description: 'Tipo de icono SVG que se mostrará a la derecha del campo de entrada.',
			control: { type: 'select' },
			options: Object.values(SvgType),
		},
		other_attributes: {
			description: 'Otras propiedades HTML estándar que se pueden aplicar al campo de entrada.',
			control: { type: 'object' },
		},
	},
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Inputs: Story = {
	args: {
		name: 'username',
		result: () => {},
		placeholder: 'Usuario',
	},
};
