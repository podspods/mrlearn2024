import { Meta, StoryObj } from '@storybook/react';
//import { ThemeProvider } from 'next-themes';
import Copyrigth from './Copyright';
const meta: Meta<typeof Copyrigth> = {
  title: 'Atoms/Copyrigth',
  component: Copyrigth,
  parameters: {
    layout: 'centered'
  },
  args: {
    name: 'Compagny'
  }
  //decorators: [(Story) => ( <ThemeProvider>   <Story /> </ThemeProvider>)]
};
export default meta;
type Story = StoryObj<typeof meta>;

export const NameOnly: Story = {
  args: {}
};

export const YearStart: Story = {
  args: {
    name: 'My old Compagny ',
    yearStart: '1900'
  }
};
