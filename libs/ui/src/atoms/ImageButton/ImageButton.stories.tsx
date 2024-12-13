import { Meta, StoryObj } from '@storybook/react';
//import { ThemeProvider } from 'next-themes';
import ImageButton from './ImageButton';
import { imageTest } from '@irachus/jscommon';
const meta: Meta<typeof ImageButton> = {
  title: 'atoms/ImageButton', 
  component: ImageButton,
  parameters: {
  layout: 'centered'
},
  args: {
    textHover: undefined,
    image : imageTest
  }
//decorators: [(Story) => ( <ThemeProvider>   <Story /> </ThemeProvider>)]
};
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
  }
};


export const TextHover: Story = {
  args: {
    textHover: 'Text hover',
  }
};