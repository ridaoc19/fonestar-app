import { Meta, StoryObj } from '@storybook/react';
import MessageList from './MessageList';

const meta: Meta<typeof MessageList> = {
	title: 'components/MessageList',
	component: MessageList,
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
