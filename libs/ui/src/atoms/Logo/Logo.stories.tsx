import { Meta, StoryObj } from '@storybook/react';
import Logo from './Logo';
const meta: Meta<typeof Logo> = {
  title: 'Atoms/Logo',
  component: Logo,
  parameters: {
    layout: 'centered'
  },
  args: {
    banner : 'LogoName',
    url :'#'
  }

};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};


export const Font1: Story = {
  args: {
    font: 'font-mono'
  }
};
