import { Meta, StoryObj } from '@storybook/react';
import Layout from './Layout';

const meta: Meta<typeof Layout> = {
	title: 'components/Layout',
	component: Layout,
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
