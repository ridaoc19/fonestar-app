import { Meta, StoryObj } from '@storybook/react';
import { ButtonType } from '../../../components/common/button/button.type';
import FormComponent from './FormComponent';

const meta: Meta<typeof FormComponent> = {
	title: 'hooks/useForm/FormComponent',
	component: FormComponent,
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		buttons: [{ bId: 'login', bText: 'Iniciar sesión', bType: ButtonType.Dark }],
		state: [],
		component: 'login',
		setState: () => '',
	},
};
