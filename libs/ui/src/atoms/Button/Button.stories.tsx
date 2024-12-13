import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import '../../index.css'

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  args: {
    id: 'id'
  }
};
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    children: 'default'
  }
};

export const Danger: Story = {
  args: {
    children: 'Danger',
    className: 'bg-danger-500'
  }
};
