import { Meta, StoryObj } from '@storybook/react';
import Spinner from '.';

const meta: Meta<typeof Spinner> = {
	title: 'components/common/Spinner',
	component: Spinner,
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
