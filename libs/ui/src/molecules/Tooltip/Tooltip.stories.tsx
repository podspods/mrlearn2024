import { Meta, StoryObj } from '@storybook/react';
//import { ThemeProvider } from 'next-themes';
import Tooltip, { TooltipPosition } from './Tooltip';
const meta: Meta<typeof Tooltip> = {
  title: 'molecules/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered'
  },
  args: {
    children: <p>children</p>
  }
  //decorators: [(Story) => ( <ThemeProvider>   <Story /> </ThemeProvider>)]
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};

export const MessageTop: Story = {
  args: {
    position: TooltipPosition.TOP,
    message: 'tooltip message top'
  }
};


export const MessageBotton: Story = {
  args: {
    position: TooltipPosition.BOTTOM,
    message: 'tooltip message button'
  }
};
export const MessageLeft: Story = {
  args: {
    position: TooltipPosition.LEFT,
    message: 'tooltip message left'
  }
};
export const MessageLeftLong: Story = {
  args: {
    position: TooltipPosition.LEFT,
    message: 'tooltip message left - tooltip message left - tooltip message left'
  }
};
export const MessageRight: Story = {
  args: {
    position: TooltipPosition.RIGHT,
    message: 'tooltip message right'
  }
};

export const MessageRightLong: Story = {
  args: {
    position: TooltipPosition.RIGHT,
    message: 'tooltip message right - tooltip message right - tooltip message right - tooltip message right - '
  }
};
