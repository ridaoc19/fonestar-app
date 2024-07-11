import { Meta, StoryObj } from '@storybook/react';
import PromptForm from './PromptForm';

const meta: Meta<typeof PromptForm> = {
	title: 'pages/home/PromptForm',
	component: PromptForm,
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
