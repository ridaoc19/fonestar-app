import { Meta, StoryObj } from '@storybook/react';
import Auth from './Auth';

const meta: Meta<typeof Auth> = {
	title: 'pages/auth/Auth',
	component: Auth,
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
