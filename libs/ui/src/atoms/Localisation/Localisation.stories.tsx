import { Meta, StoryObj } from '@storybook/react';
//import { ThemeProvider } from 'next-themes';
import Localisation from './Localisation';
import { irisationsLocalisation } from '@irachus/jscommon';
const meta: Meta<typeof Localisation> = {
  title: 'Atoms/Localisation', 
  component: Localisation,
  parameters: {
  layout: 'centered'
},
  args: {

    text : ['line 1','line 2','line 3','line 4',]
  }
//decorators: [(Story) => ( <ThemeProvider>   <Story /> </ThemeProvider>)]
};
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
  }
};


export const Irisations: Story = {
  args: {
    text :irisationsLocalisation
  }
};