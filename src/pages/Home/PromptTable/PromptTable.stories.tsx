import { Meta, StoryObj } from '@storybook/react';
import PromptTable from './PromptTable';

const meta: Meta<typeof PromptTable> = {
	title: 'pages/home/PromptTable',
	component: PromptTable,
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
