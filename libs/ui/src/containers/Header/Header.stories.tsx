import { Meta, StoryObj } from '@storybook/react';
import Header from './Header';
import { defaultItemList, defaultLocalisation, irisationsLocalisation, menuIrisations, MenuItem } from '@irachus/jscommon';



const meta: Meta<typeof Header> = {
  title: 'containers/Header',
  component: Header,
  parameters: {
    layout: 'centered'
  },
  args: {
    banner : 'Logo Brand',
    homeUrl :'/home',
    localisation : defaultLocalisation,
    menuList: defaultItemList,

  }
  //decorators: [(Story) => ( <ThemeProvider>   <Story /> </ThemeProvider>)]
};
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
};


export const Irisations: Story = {
  args: {
      banner : 'Irisations',
      homeUrl :'/home',
      localisation :irisationsLocalisation,
      menuList: menuIrisations,
  
    }
};
