import { Meta, StoryObj } from '@storybook/react';
import Captcha from './Captcha';

// Définir la configuration de base pour la story
const meta: Meta<typeof Captcha> = {
  title: 'components/Captcha', // Nom de la story
  component: Captcha,
  parameters: {
    layout: 'centered' // Centrer le composant dans l'iframe
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
   
  }
};
