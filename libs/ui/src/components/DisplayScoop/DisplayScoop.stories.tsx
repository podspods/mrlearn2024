import { Meta, StoryObj } from '@storybook/react';
import DisplayScoop from './DisplayScoop';
import { Level, scoopTest } from '@irachus/jscommon';

// Définir la configuration de base pour la story
const meta: Meta<typeof DisplayScoop> = {
  title: 'components/DisplayScoop', // Nom de la story
  component: DisplayScoop,
  parameters: {
    layout: 'centered' // Centrer le composant dans l'iframe
  },
  args :{
    scoop : scoopTest,
    idlang: 0,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Info: Story = {

};

export const Warning: Story = {
  args :{
    scoop : { ...scoopTest,
      ident : {...scoopTest.ident,level : Level.WARNING }
    },
    idlang: 1,
  },

};

export const Danger: Story = {
  args :{
    scoop : { ...scoopTest,
      ident : {...scoopTest.ident,level : Level.ERROR }
    },
  },

};

export const Preview: Story = {
  args :{
    scoop : scoopTest,
    idlang: 0,
    preview :true
  },

};
