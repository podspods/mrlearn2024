import { Meta, StoryObj } from '@storybook/react';
import Footer from './Footer';
import { footerSectionList } from '@irachus/jscommon';
const meta: Meta<typeof Footer> = {
  title: 'containers/Footer',
  component: Footer,
  parameters: {
    layout: 'centered'
  },
  args: {
    sectionList: footerSectionList,
    idLang:0
  }

};
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
 
};

export const DefaultEN: Story = {
  args: {
    idLang:1
  }
};
