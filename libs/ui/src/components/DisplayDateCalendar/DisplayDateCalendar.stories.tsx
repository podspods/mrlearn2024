import { Meta, StoryObj } from '@storybook/react';
import DisplayDateCalendar from './DisplayDateCalendar';

// Définir la configuration de base pour la story
const meta: Meta<typeof DisplayDateCalendar> = {
  title: 'components/DisplayDateCalendar', // Nom de la story
  component: DisplayDateCalendar,
  parameters: {
    layout: 'centered' // Centrer le composant dans l'iframe
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Définir les différentes histoires pour le composant
export const Default: Story = {
  args: {
    date : new Date()
  }
};

