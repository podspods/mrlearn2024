import { Meta, StoryObj } from '@storybook/react';
import SelectBox from './SelectBox';
import {  optionlistTest } from '@irachus/jscommon';




// Définir la configuration de base pour la story
const meta: Meta<typeof SelectBox> = {
  title: 'components/SelectBox', // Nom de la story
  component: SelectBox,
  parameters: {
    layout: 'centered' // Centrer le composant dans l'iframe
  },
  args: {
    optionlist: optionlistTest
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Définir les différentes histoires pour le composant
export const Default: Story = {
  args: {
  }
};


export const Small: Story = {
  args: {
    className: 'w-24'
  }
};



