import { Meta, StoryObj } from '@storybook/react';
import DisplayPageSection from './DisplaySection';
import { irisationsSection, PicPosition, sectionNews } from '@irachus/jscommon';

// Définir la configuration de base pour la story
const meta: Meta<typeof DisplayPageSection> = {
  title: 'components/DisplaySection', // Nom de la story
  component: DisplayPageSection,
  parameters: {
    layout: 'centered' // Centrer le composant dans l'iframe
  },
  args: {
    section: irisationsSection,
    idLang : 0 
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
 
};

export const DefaultEN: Story = {
  args: {
    idLang : 1 
  }
};

export const PicRight: Story = {
  args: {
    section: {
      ...irisationsSection,
      image : {...irisationsSection.image,position : PicPosition.Right }},
  }
};




export const News: Story = {
  args: {
    section: sectionNews,
  }
};
