import { Meta, StoryObj } from '@storybook/react';
import Home from './Home';

const meta: Meta<typeof Home> = {
	title: 'pages/Home',
	component: Home,
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
