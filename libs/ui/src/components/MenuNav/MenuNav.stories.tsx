import { Meta, StoryObj } from '@storybook/react';
//import { ThemeProvider } from 'next-themes';
import MenuNav from './MenuNav';
import { defaultItemList, menuIrisations, MenuItem } from '@irachus/jscommon';


const meta: Meta<typeof MenuNav> = {
  title: 'components/MenuNav',
  component: MenuNav,
  parameters: {
    layout: 'centered'
  },
  args: {
    itemList: defaultItemList
  }
  //decorators: [(Story) => ( <ThemeProvider>   <Story /> </ThemeProvider>)]
};
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {}
};


export const Irisations: Story = {
  args: {
    itemList: menuIrisations

  }
};


