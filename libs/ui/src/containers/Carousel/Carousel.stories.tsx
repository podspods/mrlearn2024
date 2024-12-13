import { Meta, StoryObj } from '@storybook/react';
//import { ThemeProvider } from 'next-themes';
import Carousel from './Carousel';
const meta: Meta<typeof Carousel> = {
  title: '/Carousel',
  component: Carousel,
  parameters: {
    layout: 'centered'
  },
  args: {}
  //decorators: [(Story) => ( <ThemeProvider>   <Story /> </ThemeProvider>)]
};
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {}
};
