import { Meta, StoryObj } from '@storybook/react';
//import { ThemeProvider } from 'next-themes';
import Sole from './Sole';
import { internallinkListTest, socialNetworkTest } from '@irachus/jscommon';
const meta: Meta<typeof Sole> = {
  title: 'Atoms/Sole', 
  component: Sole,
  parameters: {
  layout: 'centered'
},
  args: {
    internalLinkList: [],
    socialNetwork: [],
    yearStart : 2000 
  }
//decorators: [(Story) => ( <ThemeProvider>   <Story /> </ThemeProvider>)]
};
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {

};


export const InternalLink: Story = {
  args: {
    internalLinkList : internallinkListTest
  }
};

export const SocialNetwork: Story = {
  args: {
    socialNetwork : socialNetworkTest
  }
};


export const Full: Story = {
  args: {
    internalLinkList : internallinkListTest,
    socialNetwork : socialNetworkTest,
    yearStart : 1980, 
    brand : "My compagny"
  }
};


