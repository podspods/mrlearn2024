import { Meta, StoryObj } from '@storybook/react';
//import { ThemeProvider } from 'next-themes';
import DisplayNewsSection from './DisplayNewsSection';
import { sectionNews } from '@irachus/jscommon';
const meta: Meta<typeof DisplayNewsSection> = {
  title: 'components/DisplayNewsSection', 
  component: DisplayNewsSection,
  parameters: {
  layout: 'centered'
},
  args: {
    section : sectionNews,
    idLang : 0 
  }
};
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
  }
};


export const DefaultEn: Story = {
  args: {
    idLang:1
  }
};