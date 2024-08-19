import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
const meta: Meta<typeof Button> = {
  title: '/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  }
};
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    children: <>"my button "</>
  }
};
