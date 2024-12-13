import { Meta, StoryObj } from '@storybook/react';
//import { ThemeProvider } from 'next-themes';
import DisplayFooterSection from './DisplayFooterSection';
import { footerSection } from '@irachus/jscommon';
const meta: Meta<typeof DisplayFooterSection> = {
  title: 'components/DisplayFooterSection', 
  component: DisplayFooterSection,
  parameters: {
  layout: 'centered'
},
  args: {
    section: footerSection,
    idLang: 0
  }
//decorators: [(Story) => ( <ThemeProvider>   <Story /> </ThemeProvider>)]
};
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
  }
};