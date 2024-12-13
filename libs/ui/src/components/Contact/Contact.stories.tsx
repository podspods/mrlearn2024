import { Meta, StoryObj } from '@storybook/react';
import Contact from './Contact';

// Définir la configuration de base pour la story
const meta: Meta<typeof Contact> = {
  title: 'irisations/container/Contact', // Nom de la story
  component: Contact,
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
